import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRiddleQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRiddleSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetRiddleRequest:
    query_params: GetRiddleQueryParams = dataclasses.field()
    security: GetRiddleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRiddleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
