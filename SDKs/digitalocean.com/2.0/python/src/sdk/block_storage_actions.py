import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class BlockStorageActions:
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

    
    def get_volume_action(self, request: operations.GetVolumeActionRequest) -> operations.GetVolumeActionResponse:
        r"""Retrieve an Existing Volume Action
        To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}/actions/{action_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumeActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_volume_action_200_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumeAction401ApplicationJSON])
                res.get_volume_action_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def list_all_volume_actions(self, request: operations.ListAllVolumeActionsRequest) -> operations.ListAllVolumeActionsResponse:
        r"""List All Actions for a Volume
        To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllVolumeActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllVolumeActions200ApplicationJSON])
                res.list_all_volume_actions_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllVolumeActions401ApplicationJSON])
                res.list_all_volume_actions_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def post_volume_action_by_id(self, request: operations.PostVolumeActionByIDRequest) -> operations.PostVolumeActionByIDResponse:
        r"""Initiate A Block Storage Action By Volume Id
        To initiate an action on a block storage volume by Id, send a POST request to
        `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
        attributes for the respective action.
        
        ## Attach a Block Storage Volume to a Droplet
        
        | Attribute  | Details                                                             |
        | ---------- | ------------------------------------------------------------------- |
        | type       | This must be `attach`                                               |
        | droplet_id | Set to the Droplet's ID                                             |
        | region     | Set to the slug representing the region where the volume is located |
        
        Each volume may only be attached to a single Droplet. However, up to five
        volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
        automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
        Droplets created on or after April 26, 2018 when attached. On older Droplets,
        [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
        is required.
        
        ## Remove a Block Storage Volume from a Droplet
        
        | Attribute  | Details                                                             |
        | ---------- | ------------------------------------------------------------------- |
        | type       | This must be `detach`                                               |
        | droplet_id | Set to the Droplet's ID                                             |
        | region     | Set to the slug representing the region where the volume is located |
        
        ## Resize a Volume
        
        | Attribute      | Details                                                             |
        | -------------- | ------------------------------------------------------------------- |
        | type           | This must be `resize`                                               |
        | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
        | region         | Set to the slug representing the region where the volume is located |
        
        Volumes may only be resized upwards. The maximum size for a volume is 16TiB.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}/actions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumeActionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_volume_action_by_id_202_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumeActionByID401ApplicationJSON])
                res.post_volume_action_by_id_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def post_volume_action_by_name(self, request: operations.PostVolumeActionByNameRequest) -> operations.PostVolumeActionByNameResponse:
        r"""Initiate A Block Storage Action By Volume Name
        To initiate an action on a block storage volume by Id, send a POST request to
        `~/v2/volumes/actions`. The body should contain the appropriate
        attributes for the respective action.
        
        ## Attach a Block Storage Volume to a Droplet
        
        | Attribute   | Details                                                             |
        | ----------- | ------------------------------------------------------------------- |
        | type        | This must be `attach`                                               |
        | volume_name | The name of the block storage volume                                |
        | droplet_id  | Set to the Droplet's ID                                             |
        | region      | Set to the slug representing the region where the volume is located |
        
        Each volume may only be attached to a single Droplet. However, up to five
        volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
        automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
        Droplets created on or after April 26, 2018 when attached. On older Droplets,
        [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
        is required.
        
        ## Remove a Block Storage Volume from a Droplet
        
        | Attribute   | Details                                                             |
        | ----------- | ------------------------------------------------------------------- |
        | type        | This must be `detach`                                               |
        | volume_name | The name of the block storage volume                                |
        | droplet_id  | Set to the Droplet's ID                                             |
        | region      | Set to the slug representing the region where the volume is located |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/volumes/actions"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumeActionByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_volume_action_by_name_202_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumeActionByName401ApplicationJSON])
                res.post_volume_action_by_name_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    