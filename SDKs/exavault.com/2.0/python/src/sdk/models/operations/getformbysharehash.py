import dataclasses
from typing import Optional
from enum import Enum
from ..shared import formresponse as shared_formresponse

class GetFormByShareHashIncludeEnum(str, Enum):
    SHARE = "share"


@dataclasses.dataclass
class GetFormByShareHashQueryParams:
    share_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'shareHash', 'style': 'form', 'explode': True }})
    include: Optional[GetFormByShareHashIncludeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFormByShareHashHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormByShareHashRequest:
    headers: GetFormByShareHashHeaders = dataclasses.field()
    query_params: GetFormByShareHashQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFormByShareHashResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_response: Optional[shared_formresponse.FormResponse] = dataclasses.field(default=None)
    
