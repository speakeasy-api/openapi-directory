import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Group:
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

    
    def create_group_if_not_exists_for_using_get(self, request: operations.CreateGroupIfNotExistsForUsingGetRequest) -> operations.CreateGroupIfNotExistsForUsingGetResponse:
        r"""this functions helps you to map your application group ids to Etherpad group ids
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroupIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupIfNotExistsForUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet200ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet400ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet401ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet500ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_500_application_json_object = out

        return res

    
    def create_group_if_not_exists_for_using_post(self, request: operations.CreateGroupIfNotExistsForUsingPostRequest) -> operations.CreateGroupIfNotExistsForUsingPostResponse:
        r"""this functions helps you to map your application group ids to Etherpad group ids
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroupIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupIfNotExistsForUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost200ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost400ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost401ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost500ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_500_application_json_object = out

        return res

    
    def create_group_pad_using_get(self, request: operations.CreateGroupPadUsingGetRequest) -> operations.CreateGroupPadUsingGetResponse:
        r"""creates a new pad in this group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroupPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet200ApplicationJSON])
                res.create_group_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet400ApplicationJSON])
                res.create_group_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet401ApplicationJSON])
                res.create_group_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet500ApplicationJSON])
                res.create_group_pad_using_get_500_application_json_object = out

        return res

    
    def create_group_pad_using_post(self, request: operations.CreateGroupPadUsingPostRequest) -> operations.CreateGroupPadUsingPostResponse:
        r"""creates a new pad in this group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroupPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost200ApplicationJSON])
                res.create_group_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost400ApplicationJSON])
                res.create_group_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost401ApplicationJSON])
                res.create_group_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost500ApplicationJSON])
                res.create_group_pad_using_post_500_application_json_object = out

        return res

    
    def create_group_using_get(self) -> operations.CreateGroupUsingGetResponse:
        r"""creates a new group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroup"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet200ApplicationJSON])
                res.create_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet400ApplicationJSON])
                res.create_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet401ApplicationJSON])
                res.create_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet500ApplicationJSON])
                res.create_group_using_get_500_application_json_object = out

        return res

    
    def create_group_using_post(self) -> operations.CreateGroupUsingPostResponse:
        r"""creates a new group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createGroup"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost200ApplicationJSON])
                res.create_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost400ApplicationJSON])
                res.create_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost401ApplicationJSON])
                res.create_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost500ApplicationJSON])
                res.create_group_using_post_500_application_json_object = out

        return res

    
    def delete_group_using_get(self, request: operations.DeleteGroupUsingGetRequest) -> operations.DeleteGroupUsingGetResponse:
        r"""deletes a group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deleteGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet200ApplicationJSON])
                res.delete_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet400ApplicationJSON])
                res.delete_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet401ApplicationJSON])
                res.delete_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet500ApplicationJSON])
                res.delete_group_using_get_500_application_json_object = out

        return res

    
    def delete_group_using_post(self, request: operations.DeleteGroupUsingPostRequest) -> operations.DeleteGroupUsingPostResponse:
        r"""deletes a group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deleteGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost200ApplicationJSON])
                res.delete_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost400ApplicationJSON])
                res.delete_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost401ApplicationJSON])
                res.delete_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost500ApplicationJSON])
                res.delete_group_using_post_500_application_json_object = out

        return res

    
    def list_all_groups_using_get(self) -> operations.ListAllGroupsUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAllGroups"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllGroupsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet200ApplicationJSON])
                res.list_all_groups_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet400ApplicationJSON])
                res.list_all_groups_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet401ApplicationJSON])
                res.list_all_groups_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet500ApplicationJSON])
                res.list_all_groups_using_get_500_application_json_object = out

        return res

    
    def list_all_groups_using_post(self) -> operations.ListAllGroupsUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAllGroups"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllGroupsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost200ApplicationJSON])
                res.list_all_groups_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost400ApplicationJSON])
                res.list_all_groups_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost401ApplicationJSON])
                res.list_all_groups_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost500ApplicationJSON])
                res.list_all_groups_using_post_500_application_json_object = out

        return res

    
    def list_pads_using_get(self, request: operations.ListPadsUsingGetRequest) -> operations.ListPadsUsingGetResponse:
        r"""returns all pads of this group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPads"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet200ApplicationJSON])
                res.list_pads_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet400ApplicationJSON])
                res.list_pads_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet401ApplicationJSON])
                res.list_pads_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet500ApplicationJSON])
                res.list_pads_using_get_500_application_json_object = out

        return res

    
    def list_pads_using_post(self, request: operations.ListPadsUsingPostRequest) -> operations.ListPadsUsingPostResponse:
        r"""returns all pads of this group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPads"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost200ApplicationJSON])
                res.list_pads_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost400ApplicationJSON])
                res.list_pads_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost401ApplicationJSON])
                res.list_pads_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost500ApplicationJSON])
                res.list_pads_using_post_500_application_json_object = out

        return res

    
    def list_sessions_of_group_using_get(self, request: operations.ListSessionsOfGroupUsingGetRequest) -> operations.ListSessionsOfGroupUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSessionsOfGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet200ApplicationJSON])
                res.list_sessions_of_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet400ApplicationJSON])
                res.list_sessions_of_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet401ApplicationJSON])
                res.list_sessions_of_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet500ApplicationJSON])
                res.list_sessions_of_group_using_get_500_application_json_object = out

        return res

    
    def list_sessions_of_group_using_post(self, request: operations.ListSessionsOfGroupUsingPostRequest) -> operations.ListSessionsOfGroupUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSessionsOfGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost200ApplicationJSON])
                res.list_sessions_of_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost400ApplicationJSON])
                res.list_sessions_of_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost401ApplicationJSON])
                res.list_sessions_of_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost500ApplicationJSON])
                res.list_sessions_of_group_using_post_500_application_json_object = out

        return res

    