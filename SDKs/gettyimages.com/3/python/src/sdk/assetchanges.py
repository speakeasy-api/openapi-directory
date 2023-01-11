import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AssetChanges:
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

    
    def delete_v3_asset_changes_change_sets_change_set_id_(self, request: operations.DeleteV3AssetChangesChangeSetsChangeSetIDRequest) -> operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse:
        r"""Confirm asset change notifications.
        # Delete Asset Changes
        
        Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/asset-changes/change-sets/{change-set-id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_asset_changes_channels(self) -> operations.GetV3AssetChangesChannelsResponse:
        r"""Get a list of asset change notification channels.
        # Get Partner Channels
        
        Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource.
        
        Partners who have a channel that has been removed should contact their sales representative to be set up again.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/asset-changes/channels"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3AssetChangesChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Channel]])
                res.channels = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_asset_changes_change_sets(self, request: operations.PutV3AssetChangesChangeSetsRequest) -> operations.PutV3AssetChangesChangeSetsResponse:
        r"""Get asset change notifications.
        # Asset Changes
        
        Get notifications about new, updated or deleted assets.
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource. 
        
        Notifications older than 60 days will be removed from partner channels.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/asset-changes/change-sets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3AssetChangesChangeSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetChanges])
                res.asset_changes = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetChanges])
                res.asset_changes = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    