"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from ..shared import fullitem as shared_fullitem
from ..shared import patch as shared_patch
from typing import Optional


@dataclasses.dataclass
class PatchVaultItemSecurity:
    
    connect_token: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class PatchVaultItemRequest:
    
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the Item to update"""  
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the Vault the item is in"""  
    request_body: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class PatchVaultItemResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Invalid or missing token"""  
    full_item: Optional[shared_fullitem.FullItem] = dataclasses.field(default=None)
    r"""OK - Item updated. If no Patch operations were provided, Item is unmodified."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    