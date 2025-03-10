"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from typing import Optional


@dataclasses.dataclass
class DownloadFileByIDSecurity:
    
    connect_token: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class DownloadFileByIDRequest:
    
    file_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    r"""UUID of the file to get content from"""  
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the Item the File is in"""  
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the Vault the item is in"""  
    

@dataclasses.dataclass
class DownloadFileByIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    download_file_by_id_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    r"""Success"""  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Invalid or missing token"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    