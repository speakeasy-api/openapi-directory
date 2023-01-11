import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Images:
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

    
    def create_custom_image(self, request: operations.CreateCustomImageRequest) -> operations.CreateCustomImageResponse:
        r"""Create a Custom Image
        To create a new custom image, send a POST request to /v2/images.
        The body must contain a url attribute pointing to a Linux virtual machine
        image to be imported into DigitalOcean.
        The image must be in the raw, qcow2, vhdx, vdi, or vmdk format.
        It may be compressed using gzip or bzip2 and must be smaller than 100 GB after
         being decompressed.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/images"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_custom_image_202_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCustomImage401ApplicationJSON])
                res.create_custom_image_401_application_json_object = out
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

    
    def delete_image(self, request: operations.DeleteImageRequest) -> operations.DeleteImageResponse:
        r"""Delete an Image
        To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/images/{image_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteImage401ApplicationJSON])
                res.delete_image_401_application_json_object = out
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

    
    def get_image(self, request: operations.GetImageRequest) -> operations.GetImageResponse:
        r"""Retrieve an Existing Image
        To retrieve information about an image, send a `GET` request to
        `/v2/images/$IDENTIFIER`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/images/{image_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImage200ApplicationJSON])
                res.get_image_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImage401ApplicationJSON])
                res.get_image_401_application_json_object = out
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

    
    def get_images_list(self, request: operations.GetImagesListRequest) -> operations.GetImagesListResponse:
        r"""List All Images
        To list all of the images available on your account, send a GET request to /v2/images.
        
        ## Filtering Results
        -----
        
        It's possible to request filtered results by including certain query parameters.
        
        **Image Type**
        
        Either 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.
        
        > Important: The `type` query parameter does not directly relate to the `type` attribute.
        
        To retrieve only ***distribution*** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.
        
        To retrieve only ***application*** images, include the `type` query parameter set to application, `/v2/images?type=application`.
        
        **User Images**
        
        To retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.
        
        **Tags**
        
        To list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/images"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesList200ApplicationJSON])
                res.get_images_list_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesList401ApplicationJSON])
                res.get_images_list_401_application_json_object = out
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

    
    def update_image(self, request: operations.UpdateImageRequest) -> operations.UpdateImageResponse:
        r"""Update an Image
        To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.
        Set the `name` attribute to the new value you would like to use.
        For custom images, the `description` and `distribution` attributes may also be updated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/images/{image_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateImage200ApplicationJSON])
                res.update_image_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateImage401ApplicationJSON])
                res.update_image_401_application_json_object = out
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

    