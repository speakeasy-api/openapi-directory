import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class DropletActions:
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

    
    def get_droplet_action(self, request: operations.GetDropletActionRequest) -> operations.GetDropletActionResponse:
        r"""Retrieve a Droplet Action
        To retrieve a Droplet action, send a GET request to
        `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.
        
        The response will be a JSON object with a key called `action`. The value will
        be a Droplet action object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/droplets/{droplet_id}/actions/{action_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDropletActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_droplet_action_200_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDropletAction401ApplicationJSON])
                res.get_droplet_action_401_application_json_object = out
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

    
    def list_droplet_actions(self, request: operations.ListDropletActionsRequest) -> operations.ListDropletActionsResponse:
        r"""List Actions for a Droplet
        To retrieve a list of all actions that have been executed for a Droplet, send
        a GET request to `/v2/droplets/$DROPLET_ID/actions`.
        
        The results will be returned as a JSON object with an `actions` key. This will
        be set to an array filled with `action` objects containing the standard
        `action` attributes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/droplets/{droplet_id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDropletActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDropletActions200ApplicationJSON])
                res.list_droplet_actions_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDropletActions401ApplicationJSON])
                res.list_droplet_actions_401_application_json_object = out
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

    
    def post_droplet_action(self, request: operations.PostDropletActionRequest) -> operations.PostDropletActionResponse:
        r"""Initiate a Droplet Action
        To initiate an action on a Droplet send a POST request to
        `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,
        set the `type` attribute to on of the supported action types:
        
        | Action                                   | Details |
        | ---------------------------------------- | ----------- |
        | <nobr>`enable_backups`</nobr>            | Enables backups for a Droplet |
        | <nobr>`disable_backups`</nobr>           | Disables backups for a Droplet |
        | <nobr>`reboot`</nobr>                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. |
        | <nobr>`power_cycle`</nobr>               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. |
        | <nobr>`shutdown`</nobr>                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |
        | <nobr>`power_off`</nobr>                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. |
        | <nobr>`power_on`</nobr>                  | Powers on a Droplet. |
        | <nobr>`restore`</nobr>                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. |
        | <nobr>`password_reset`</nobr>            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. |
        | <nobr>`resize`</nobr>                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. |
        | <nobr>`rebuild`</nobr>                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. |
        | <nobr>`rename`</nobr>                    | Renames a Droplet. |
        | <nobr>`change_kernel`</nobr>             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. |
        | <nobr>`enable_ipv6`</nobr>               | Enables IPv6 for a Droplet. |
        | <nobr>`snapshot`</nobr>                  | Takes a snapshot of a Droplet. |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/droplets/{droplet_id}/actions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDropletActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_droplet_action_201_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDropletAction401ApplicationJSON])
                res.post_droplet_action_401_application_json_object = out
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

    
    def post_droplet_action_by_tag(self, request: operations.PostDropletActionByTagRequest) -> operations.PostDropletActionByTagResponse:
        r"""Acting on Tagged Droplets
        Some actions can be performed in bulk on tagged Droplets. The actions can be
        initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
        the action arguments.
        
        Only a sub-set of action types are supported:
        
        - `power_cycle`
        - `power_on`
        - `power_off`
        - `shutdown`
        - `enable_ipv6`
        - `enable_backups`
        - `disable_backups`
        - `snapshot`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/droplets/actions"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDropletActionByTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_droplet_action_by_tag_201_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDropletActionByTag401ApplicationJSON])
                res.post_droplet_action_by_tag_401_application_json_object = out
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

    