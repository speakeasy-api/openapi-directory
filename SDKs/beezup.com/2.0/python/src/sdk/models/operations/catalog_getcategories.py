"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import categorylist as shared_categorylist
from typing import Optional


@dataclasses.dataclass
class CatalogGetCategoriesRequest:
    
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    r"""Indicates that the client accepts that the response will be compressed to reduce traffic size."""  
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    r"""Your store identifier"""  
    

@dataclasses.dataclass
class CatalogGetCategoriesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUPCommonErrorResponseMessage] = dataclasses.field(default=None)
    r"""StoreId not found"""  
    category_list: Optional[shared_categorylist.CategoryList] = dataclasses.field(default=None)
    r"""Categories"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    