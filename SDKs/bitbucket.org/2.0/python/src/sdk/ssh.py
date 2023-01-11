import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class SSH:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_users_selected_user_ssh_keys_key_id_(self, request: operations.DeleteUsersSelectedUserSSHKeysKeyIDRequest) -> operations.DeleteUsersSelectedUserSSHKeysKeyIDResponse:
        r"""Deletes a specific SSH public key from a user's account
        
        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/ssh-keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersSelectedUserSSHKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_users_selected_user_ssh_keys(self, request: operations.GetUsersSelectedUserSSHKeysRequest) -> operations.GetUsersSelectedUserSSHKeysResponse:
        r"""Returns a paginated list of the user's SSH public keys.
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        {
            \"page\": 1,
            \"pagelen\": 10,
            \"size\": 1,
            \"values\": [
                {
                    \"comment\": \"user@myhost\",
                    \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",
                    \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",
                    \"label\": \"\",
                    \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",
                    \"links\": {
                        \"self\": {
                            \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"
                        }
                    },
                    \"owner\": {
                        \"display_name\": \"Mark Adams\",
                        \"links\": {
                            \"avatar\": {
                                \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/markadams-atl/\"
                            },
                            \"self\": {
                                \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}\"
                            }
                        },
                        \"type\": \"user\",
                        \"username\": \"markadams-atl\",
                        \"nickname\": \"markadams-atl\",
                        \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"
                    },
                    \"type\": \"ssh_key\",
                    \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"
                }
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/ssh-keys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedSSHUserKeys])
                res.paginated_ssh_user_keys = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_users_selected_user_ssh_keys_key_id_(self, request: operations.GetUsersSelectedUserSSHKeysKeyIDRequest) -> operations.GetUsersSelectedUserSSHKeysKeyIDResponse:
        r"""Returns a specific SSH public key belonging to a user.
        
        Example:
        ```
        $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}
        
        {
            \"comment\": \"user@myhost\",
            \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",
            \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",
            \"label\": \"\",
            \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"
                }
            },
            \"owner\": {
                \"display_name\": \"Mark Adams\",
                \"links\": {
                    \"avatar\": {
                        \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"
                    },
                    \"html\": {
                        \"href\": \"https://bitbucket.org/markadams-atl/\"
                    },
                    \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}\"
                    }
                },
                \"type\": \"user\",
                \"username\": \"markadams-atl\",
                \"nickname\": \"markadams-atl\",
                \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"
            },
            \"type\": \"ssh_key\",
            \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/ssh-keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserSSHKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.ssh_account_key = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_users_selected_user_ssh_keys(self, request: operations.PostUsersSelectedUserSSHKeysRequest) -> operations.PostUsersSelectedUserSSHKeysResponse:
        r"""Adds a new SSH public key to the specified user account and returns the resulting key.
        
        Example:
        ```
        $ curl -X POST -H \"Content-Type: application/json\" -d '{\"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost\"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
        
        {
            \"comment\": \"user@myhost\",
            \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",
            \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",
            \"label\": \"\",
            \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"
                }
            },
            \"owner\": {
                \"display_name\": \"Mark Adams\",
                \"links\": {
                    \"avatar\": {
                        \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"
                    },
                    \"html\": {
                        \"href\": \"https://bitbucket.org/markadams-atl/\"
                    },
                    \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}\"
                    }
                },
                \"type\": \"user\",
                \"username\": \"markadams-atl\",
                \"nickname\": \"markadams-atl\",
                \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"
            },
            \"type\": \"ssh_key\",
            \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/ssh-keys", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersSelectedUserSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.ssh_account_key = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_users_selected_user_ssh_keys_key_id_(self, request: operations.PutUsersSelectedUserSSHKeysKeyIDRequest) -> operations.PutUsersSelectedUserSSHKeysKeyIDResponse:
        r"""Updates a specific SSH public key on a user's account
        
        Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
        
        Example:
        ```
        $ curl -X PUT -H \"Content-Type: application/json\" -d '{\"label\": \"Work key\"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
        
        {
            \"comment\": \"\",
            \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",
            \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",
            \"label\": \"Work key\",
            \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"
                }
            },
            \"owner\": {
                \"display_name\": \"Mark Adams\",
                \"links\": {
                    \"avatar\": {
                        \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"
                    },
                    \"html\": {
                        \"href\": \"https://bitbucket.org/markadams-atl/\"
                    },
                    \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}\"
                    }
                },
                \"type\": \"user\",
                \"username\": \"markadams-atl\",
                \"nickname\": \"markadams-atl\",
                \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"
            },
            \"type\": \"ssh_key\",
            \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/ssh-keys/{key_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersSelectedUserSSHKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.ssh_account_key = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    