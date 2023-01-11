import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Access:
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

    
    def access_add(self, request: operations.AccessAddRequest) -> operations.AccessAddResponse:
        r"""Adds/Overwrites the user entry in the access control database.
        Adds/Overwrites the user entry in the access control database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/add/{user}/{agents}/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_del(self, request: operations.AccessDelRequest) -> operations.AccessDelResponse:
        r"""Clears a users entry from access control database.
        Using '*' for user clears all the users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/del/{user}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_acldb(self) -> operations.AccessGetAcldbResponse:
        r"""Returns the current access control database in use.
        If nothing is specified then this returns \"\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/acldb"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAcldbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_acldb_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_admindir(self) -> operations.AccessGetAdmindirResponse:
        r"""Returns the current admin directory.
        If nothing is specified in admin/settings.cfg then returns \"\". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/admindir"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdmindirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_admindir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_adminuser(self) -> operations.AccessGetAdminuserResponse:
        r"""Returns the current administrator.
        If nothing is specified in admin/settings.cfg then returns \"\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/adminuser"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdminuserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_adminuser_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_enabled(self) -> operations.AccessGetEnabledResponse:
        r"""Returns the state of access control checking.
        0 indicates that it is disabled, 1 indicates it is enabled.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/enabled"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_enabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_list(self) -> operations.AccessListResponse:
        r"""Returns an array of entries.
        Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AccessEntry]])
                res.access_entries = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_load(self, request: operations.AccessLoadRequest) -> operations.AccessLoadResponse:
        r"""Loads the specified file for access control data.
        If filename is not specified then the currently set 'acldb' parameter is used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/load/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.access_load_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_save(self, request: operations.AccessSaveRequest) -> operations.AccessSaveResponse:
        r"""Saves current access control data in specified file.
        If filename is not specified then the currently set 'acldb' parameter is used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/save/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.access_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_set_acldb(self, request: operations.AccessSetAcldbRequest) -> operations.AccessSetAcldbResponse:
        r"""Allows setting the name of the current access control database.
        This will be used for subsequent load and save operations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/set/acldb/{databaseName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetAcldbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_set_acldb_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_set_enabled(self, request: operations.AccessSetEnabledRequest) -> operations.AccessSetEnabledResponse:
        r"""Allows the user to enable/disable the access control check.
        0 indicates disabled, 1 indicates enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/set/enabled/{enabledOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_set_enabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    