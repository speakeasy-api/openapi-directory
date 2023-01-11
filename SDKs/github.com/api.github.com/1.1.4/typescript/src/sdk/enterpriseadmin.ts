import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EnterpriseAdmin {
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
   * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
   *
   * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
  **/
  enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(
    req: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
   *
   * Adds a self-hosted runner to a runner group configured in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise`
   * scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(
    req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
   *
   * Returns a token that you can pass to the `config` script. The token expires after one hour.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   * 
   * #### Example using registration token
   * 
   * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
   * 
   * ```
   * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
   * ```
   *
   * https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
  **/
  enterpriseAdminCreateRegistrationTokenForEnterprise(
    req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners/registration-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
   *
   * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   * 
   * #### Example using remove token
   * 
   * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
   * endpoint.
   * 
   * ```
   * ./config.sh remove --token TOKEN
   * ```
   *
   * https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
  **/
  enterpriseAdminCreateRemoveTokenForEnterprise(
    req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners/remove-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
   *
   * Creates a new self-hosted runner group for an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(
    req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups", req.pathParams);

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
        const res: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.runnerGroupsEnterprise = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminDeleteScimGroupFromEnterprise - Delete a SCIM group from an enterprise
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
  **/
  enterpriseAdminDeleteScimGroupFromEnterprise(
    req: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
   *
   * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
  **/
  enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(
    req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
   *
   * Deletes a self-hosted runner group for an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
  **/
  enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(
    req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminDeleteUserFromEnterprise - Delete a SCIM user from an enterprise
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
  **/
  enterpriseAdminDeleteUserFromEnterprise(
    req: operations.EnterpriseAdminDeleteUserFromEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteUserFromEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteUserFromEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteUserFromEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
   *
   * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
  **/
  enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(
    req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
   *
   * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
  **/
  enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(
    req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
   *
   * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
  **/
  enterpriseAdminGetAllowedActionsEnterprise(
    req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.selectedActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
   *
   * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
  **/
  enterpriseAdminGetGithubActionsPermissionsEnterprise(
    req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.actionsEnterprisePermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetProvisioningInformationForEnterpriseGroup - Get SCIM provisioning information for an enterprise group
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
  **/
  enterpriseAdminGetProvisioningInformationForEnterpriseGroup(
    req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", req.pathParams);
    
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
        const res: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetProvisioningInformationForEnterpriseUser - Get SCIM provisioning information for an enterprise user
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
  **/
  enterpriseAdminGetProvisioningInformationForEnterpriseUser(
    req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
   *
   * Gets a specific self-hosted runner configured in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
  **/
  enterpriseAdminGetSelfHostedRunnerForEnterprise(
    req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.runner = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
   *
   * Gets a specific self-hosted runner group for an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(
    req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.runnerGroupsEnterprise = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
   *
   * Lists the organizations with access to a self-hosted runner group.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
  **/
  enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(
    req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListProvisionedGroupsEnterprise - List provisioned SCIM groups for an enterprise
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListProvisionedGroupsEnterprise(
    req: operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimGroupListEnterprise = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListProvisionedIdentitiesEnterprise - List SCIM provisioned identities for an enterprise
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
   * 
   * When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
   *   - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
   *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
   *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
   * 
   * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
   * 
   * 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
   * 
   * 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
   * 
   * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
   *    - If the user signs in, their GitHub account is linked to this entry.
   *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListProvisionedIdentitiesEnterprise(
    req: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimUserListEnterprise = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
   *
   * Lists binaries for the runner application that you can download and run.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListRunnerApplicationsForEnterprise(
    req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners/downloads", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.runnerApplications = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
   *
   * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
  **/
  enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(
    req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
   *
   * Lists all self-hosted runner groups for an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(
    req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
   *
   * Lists all self-hosted runners configured for an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListSelfHostedRunnersForEnterprise(
    req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runners", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
   *
   * Lists the self-hosted runners that are in a specific enterprise group.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(
    req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminProvisionAndInviteEnterpriseGroup - Provision a SCIM enterprise group and invite users
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
  **/
  enterpriseAdminProvisionAndInviteEnterpriseGroup(
    req: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups", req.pathParams);

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
        const res: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminProvisionAndInviteEnterpriseUser - Provision and invite a SCIM enterprise user
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Provision enterprise membership for a user, and send organization invitation emails to the email address.
   * 
   * You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
  **/
  enterpriseAdminProvisionAndInviteEnterpriseUser(
    req: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users", req.pathParams);

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
        const res: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
   *
   * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
  **/
  enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(
    req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
   *
   * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(
    req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
   *
   * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
  **/
  enterpriseAdminSetAllowedActionsEnterprise(
    req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", req.pathParams);

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
        const res: operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
   *
   * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
  **/
  enterpriseAdminSetGithubActionsPermissionsEnterprise(
    req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions", req.pathParams);

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
        const res: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetInformationForProvisionedEnterpriseGroup - Set SCIM information for a provisioned enterprise group
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
  **/
  enterpriseAdminSetInformationForProvisionedEnterpriseGroup(
    req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetInformationForProvisionedEnterpriseUser - Set SCIM information for a provisioned enterprise user
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
   * 
   * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
   * 
   * **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
  **/
  enterpriseAdminSetInformationForProvisionedEnterpriseUser(
    req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
   *
   * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
  **/
  enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(
    req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", req.pathParams);

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
        const res: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
   *
   * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
  **/
  enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(
    req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", req.pathParams);

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
        const res: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
   *
   * Replaces the list of self-hosted runners that are part of an enterprise runner group.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(
    req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);

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
        const res: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminUpdateAttributeForEnterpriseGroup - Update an attribute for a SCIM enterprise group
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
   *
   * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
  **/
  enterpriseAdminUpdateAttributeForEnterpriseGroup(
    req: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminUpdateAttributeForEnterpriseUser - Update an attribute for a SCIM enterprise user
   *
   * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
   * 
   * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
   * 
   * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
   * 
   * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
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
   * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
  **/
  enterpriseAdminUpdateAttributeForEnterpriseUser(
    req: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.scimEnterpriseUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
   *
   * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
   * 
   * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
   *
   * https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
  **/
  enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(
    req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.runnerGroupsEnterprise = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
