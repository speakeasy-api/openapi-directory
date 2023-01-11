import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Scim {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * scimDeleteUserFromOrg - Delete a SCIM user from an organization
   *
   * https://docs.github.com/rest/reference/scim/#delete-a-scim-user-from-an-organization - API method documentation
  **/
  scimDeleteUserFromOrg(
    req: operations.ScimDeleteUserFromOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimDeleteUserFromOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimDeleteUserFromOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users/{scim_user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimDeleteUserFromOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * scimGetProvisioningInformationForUser - Get SCIM provisioning information for a user
   *
   * https://docs.github.com/rest/reference/scim/#get-scim-provisioning-information-for-a-user - API method documentation
  **/
  scimGetProvisioningInformationForUser(
    req: operations.ScimGetProvisioningInformationForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimGetProvisioningInformationForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimGetProvisioningInformationForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users/{scim_user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimGetProvisioningInformationForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimUser = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * scimListProvisionedIdentities - List SCIM provisioned identities
   *
   * Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.
   * 
   * When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
   *   - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
   *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
   *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
   * 
   * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
   * 
   * 1. The user is granted access by the IdP and is not a member of the GitHub organization.
   * 
   * 1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
   * 
   * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
   *    - If the user signs in, their GitHub account is linked to this entry.
   *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.
   *
   * https://docs.github.com/rest/reference/scim/#list-scim-provisioned-identities - API method documentation
  **/
  scimListProvisionedIdentities(
    req: operations.ScimListProvisionedIdentitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimListProvisionedIdentitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimListProvisionedIdentitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimListProvisionedIdentitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimUserList = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * scimProvisionAndInviteUser - Provision and invite a SCIM user
   *
   * Provision organization membership for a user, and send an activation email to the email address.
   *
   * https://docs.github.com/rest/reference/scim/#provision-and-invite-a-scim-user - API method documentation
  **/
  scimProvisionAndInviteUser(
    req: operations.ScimProvisionAndInviteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimProvisionAndInviteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimProvisionAndInviteUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimProvisionAndInviteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimUser = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * scimSetInformationForProvisionedUser - Update a provisioned organization membership
   *
   * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
   * 
   * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
   * 
   * **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
   *
   * https://docs.github.com/rest/reference/scim/#set-scim-information-for-a-provisioned-user - API method documentation
  **/
  scimSetInformationForProvisionedUser(
    req: operations.ScimSetInformationForProvisionedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimSetInformationForProvisionedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimSetInformationForProvisionedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users/{scim_user_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimSetInformationForProvisionedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimUser = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * scimUpdateAttributeForUser - Update an attribute for a SCIM user
   *
   * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
   * 
   * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
   * 
   * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.
   * 
   * ```
   * {
   *   "Operations":[{
   *     "op":"replace",
   *     "value":{
   *       "active":false
   *     }
   *   }]
   * }
   * ```
   *
   * https://docs.github.com/rest/reference/scim/#update-an-attribute-for-a-scim-user - API method documentation
  **/
  scimUpdateAttributeForUser(
    req: operations.ScimUpdateAttributeForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScimUpdateAttributeForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScimUpdateAttributeForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/organizations/{org}/Users/{scim_user_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScimUpdateAttributeForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimUser = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
