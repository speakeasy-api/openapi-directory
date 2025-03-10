"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import transfer as shared_transfer
from typing import Optional


@dataclasses.dataclass
class GetTransferSecurity:
    
    api_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetTransferRequest:
    
    transfer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transfer_Id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the <code>TRANSFER</code> transaction type you wish to retrieve."""  
    x_ebay_c_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    r"""This header identifies the seller's eBay marketplace. It is required for all marketplaces outside of the US. See <a href=\\"/api-docs/static/rest-request-components.html#marketpl \\" target=\\"_blank \\">HTTP request headers</a> for the marketplace ID values."""  
    

@dataclasses.dataclass
class GetTransferResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    transfer: Optional[shared_transfer.Transfer] = dataclasses.field(default=None)
    r"""Success."""  
    