import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Ssh {
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
   * deleteUsersSelectedUserSshKeysKeyId - Deletes a specific SSH public key from a user's account
   * 
   * Example:
   * ```
   * $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
   * ```
  **/
  deleteUsersSelectedUserSshKeysKeyId(
    req: operations.DeleteUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUsersSelectedUserSshKeys - Returns a paginated list of the user's SSH public keys.
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
   * {
   *     "page": 1,
   *     "pagelen": 10,
   *     "size": 1,
   *     "values": [
   *         {
   *             "comment": "user@myhost",
   *             "created_on": "2018-03-14T13:17:05.196003+00:00",
   *             "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
   *             "label": "",
   *             "last_used": "2018-03-20T13:18:05.196003+00:00",
   *             "links": {
   *                 "self": {
   *                     "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
   *                 }
   *             },
   *             "owner": {
   *                 "display_name": "Mark Adams",
   *                 "links": {
   *                     "avatar": {
   *                         "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
   *                     },
   *                     "html": {
   *                         "href": "https://bitbucket.org/markadams-atl/"
   *                     },
   *                     "self": {
   *                         "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
   *                     }
   *                 },
   *                 "type": "user",
   *                 "username": "markadams-atl",
   *                 "nickname": "markadams-atl",
   *                 "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
   *             },
   *             "type": "ssh_key",
   *             "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
   *         }
   *     ]
   * }
   * ```
  **/
  getUsersSelectedUserSshKeys(
    req: operations.GetUsersSelectedUserSshKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSshKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSshKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/ssh-keys", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersSelectedUserSshKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedSshUserKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUsersSelectedUserSshKeysKeyId - Returns a specific SSH public key belonging to a user.
   * 
   * Example:
   * ```
   * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}
   * 
   * {
   *     "comment": "user@myhost",
   *     "created_on": "2018-03-14T13:17:05.196003+00:00",
   *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
   *     "label": "",
   *     "last_used": "2018-03-20T13:18:05.196003+00:00",
   *     "links": {
   *         "self": {
   *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
   *         }
   *     },
   *     "owner": {
   *         "display_name": "Mark Adams",
   *         "links": {
   *             "avatar": {
   *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
   *             },
   *             "html": {
   *                 "href": "https://bitbucket.org/markadams-atl/"
   *             },
   *             "self": {
   *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
   *             }
   *         },
   *         "type": "user",
   *         "username": "markadams-atl",
   *         "nickname": "markadams-atl",
   *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
   *     },
   *     "type": "ssh_key",
   *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
   * }
   * ```
  **/
  getUsersSelectedUserSshKeysKeyId(
    req: operations.GetUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postUsersSelectedUserSshKeys - Adds a new SSH public key to the specified user account and returns the resulting key.
   * 
   * Example:
   * ```
   * $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
   * 
   * {
   *     "comment": "user@myhost",
   *     "created_on": "2018-03-14T13:17:05.196003+00:00",
   *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
   *     "label": "",
   *     "last_used": "2018-03-20T13:18:05.196003+00:00",
   *     "links": {
   *         "self": {
   *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
   *         }
   *     },
   *     "owner": {
   *         "display_name": "Mark Adams",
   *         "links": {
   *             "avatar": {
   *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
   *             },
   *             "html": {
   *                 "href": "https://bitbucket.org/markadams-atl/"
   *             },
   *             "self": {
   *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
   *             }
   *         },
   *         "type": "user",
   *         "username": "markadams-atl",
   *         "nickname": "markadams-atl",
   *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
   *     },
   *     "type": "ssh_key",
   *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
   * }
   * ```
  **/
  postUsersSelectedUserSshKeys(
    req: operations.PostUsersSelectedUserSshKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersSelectedUserSshKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersSelectedUserSshKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/ssh-keys", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PostUsersSelectedUserSshKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putUsersSelectedUserSshKeysKeyId - Updates a specific SSH public key on a user's account
   * 
   * Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
   * 
   * Example:
   * ```
   * $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
   * 
   * {
   *     "comment": "",
   *     "created_on": "2018-03-14T13:17:05.196003+00:00",
   *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
   *     "label": "Work key",
   *     "last_used": "2018-03-20T13:18:05.196003+00:00",
   *     "links": {
   *         "self": {
   *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
   *         }
   *     },
   *     "owner": {
   *         "display_name": "Mark Adams",
   *         "links": {
   *             "avatar": {
   *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
   *             },
   *             "html": {
   *                 "href": "https://bitbucket.org/markadams-atl/"
   *             },
   *             "self": {
   *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
   *             }
   *         },
   *         "type": "user",
   *         "username": "markadams-atl",
   *         "nickname": "markadams-atl",
   *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
   *     },
   *     "type": "ssh_key",
   *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
   * }
   * ```
  **/
  putUsersSelectedUserSshKeysKeyId(
    req: operations.PutUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PutUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
