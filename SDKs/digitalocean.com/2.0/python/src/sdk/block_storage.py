import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class BlockStorage:
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

    
    def create_new_volume(self, request: operations.CreateNewVolumeRequest) -> operations.CreateNewVolumeResponse:
        r"""Create a New Block Storage Volume
        To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/volumes"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_new_volume_201_application_json_any = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNewVolume401ApplicationJSON])
                res.create_new_volume_401_application_json_object = out
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

    
    def create_volume_snapshot(self, request: operations.CreateVolumeSnapshotRequest) -> operations.CreateVolumeSnapshotResponse:
        r"""Create Snapshot from a Volume
        To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}/snapshots", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVolumeSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_volume_snapshot_201_application_json_any = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateVolumeSnapshot401ApplicationJSON])
                res.create_volume_snapshot_401_application_json_object = out
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

    
    def delete_volume(self, request: operations.DeleteVolumeRequest) -> operations.DeleteVolumeResponse:
        r"""Delete a Block Storage Volume
        To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.
        No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteVolume401ApplicationJSON])
                res.delete_volume_401_application_json_object = out
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

    
    def delete_volume_by_name(self, request: operations.DeleteVolumeByNameRequest) -> operations.DeleteVolumeByNameResponse:
        r"""Delete a Block Storage Volume by Name
        Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
        No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumeByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteVolumeByName401ApplicationJSON])
                res.delete_volume_by_name_401_application_json_object = out
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

    
    def delete_volume_snapshot_by_id(self, request: operations.DeleteVolumeSnapshotByIDRequest) -> operations.DeleteVolumeSnapshotByIDResponse:
        r"""Delete a Volume Snapshot
        To delete a volume snapshot, send a DELETE request to
        `/v2/snapshots/$SNAPSHOT_ID`.
        
        A status of 204 will be given. This indicates that the request was processed
        successfully, but that no response body is needed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/snapshot/{snapshot_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumeSnapshotByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteVolumeSnapshotByID401ApplicationJSON])
                res.delete_volume_snapshot_by_id_401_application_json_object = out
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

    
    def get_volume(self, request: operations.GetVolumeRequest) -> operations.GetVolumeResponse:
        r"""Retrieve an Existing Block Storage Volume
        To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_volume_200_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolume401ApplicationJSON])
                res.get_volume_401_application_json_object = out
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

    
    def get_volume_snapshot_by_id(self, request: operations.GetVolumeSnapshotByIDRequest) -> operations.GetVolumeSnapshotByIDResponse:
        r"""Retreive an Existing Volume Snapshot
        To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$SNAPSHOT_ID`.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/snapshot/{snapshot_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumeSnapshotByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_volume_snapshot_by_id_200_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumeSnapshotByID401ApplicationJSON])
                res.get_volume_snapshot_by_id_401_application_json_object = out
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

    
    def list_all_volumes(self, request: operations.ListAllVolumesRequest) -> operations.ListAllVolumesResponse:
        r"""List All Block Storage Volumes
        To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.
        ## Filtering Results
        ### By Region
        The `region` may be provided as query paramater in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
        ### By Name
        It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.
        **Note:** You can only create one volume per region with the same name.
        ### By Name and Region
        It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
        
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllVolumes200ApplicationJSON])
                res.list_all_volumes_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllVolumes401ApplicationJSON])
                res.list_all_volumes_401_application_json_object = out
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

    
    def list_volume_snapshots(self, request: operations.ListVolumeSnapshotsRequest) -> operations.ListVolumeSnapshotsResponse:
        r"""List Snapshots for a Volume
        To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/volumes/{volume_id}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVolumeSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVolumeSnapshots200ApplicationJSON])
                res.list_volume_snapshots_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVolumeSnapshots401ApplicationJSON])
                res.list_volume_snapshots_401_application_json_object = out
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

    