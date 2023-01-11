import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUUIDVersionVersionPathParams:
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUUIDVersionVersionQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUUIDVersionVersionSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetUUIDVersionVersionRequest:
    path_params: GetUUIDVersionVersionPathParams = dataclasses.field()
    query_params: GetUUIDVersionVersionQueryParams = dataclasses.field()
    security: GetUUIDVersionVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUUIDVersionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
