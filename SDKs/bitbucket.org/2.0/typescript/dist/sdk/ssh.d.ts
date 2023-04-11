import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The SSH resource allows you to manage SSH keys.
 *
 * @remarks
 *
 */
export declare class Ssh {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a SSH key
     *
     * @remarks
     * Deletes a specific SSH public key from a user's account
     *
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
     * ```
     */
    deleteUsersSelectedUserSshKeysKeyId(req: operations.DeleteUsersSelectedUserSshKeysKeyIdRequest, security: operations.DeleteUsersSelectedUserSshKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUsersSelectedUserSshKeysKeyIdResponse>;
    /**
     * List SSH keys
     *
     * @remarks
     * Returns a paginated list of the user's SSH public keys.
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
     */
    getUsersSelectedUserSshKeys(req: operations.GetUsersSelectedUserSshKeysRequest, security: operations.GetUsersSelectedUserSshKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserSshKeysResponse>;
    /**
     * Get a SSH key
     *
     * @remarks
     * Returns a specific SSH public key belonging to a user.
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
     */
    getUsersSelectedUserSshKeysKeyId(req: operations.GetUsersSelectedUserSshKeysKeyIdRequest, security: operations.GetUsersSelectedUserSshKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserSshKeysKeyIdResponse>;
    /**
     * Add a new SSH key
     *
     * @remarks
     * Adds a new SSH public key to the specified user account and returns the resulting key.
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
     */
    postUsersSelectedUserSshKeys(req: operations.PostUsersSelectedUserSshKeysRequest, security: operations.PostUsersSelectedUserSshKeysSecurity, config?: AxiosRequestConfig): Promise<operations.PostUsersSelectedUserSshKeysResponse>;
    /**
     * Update a SSH key
     *
     * @remarks
     * Updates a specific SSH public key on a user's account
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
     */
    putUsersSelectedUserSshKeysKeyId(req: operations.PutUsersSelectedUserSshKeysKeyIdRequest, security: operations.PutUsersSelectedUserSshKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutUsersSelectedUserSshKeysKeyIdResponse>;
}
