import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetShakespeareGenerateNameQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShakespeareGenerateNameSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetShakespeareGenerateNameRequest:
    query_params: GetShakespeareGenerateNameQueryParams = dataclasses.field()
    security: GetShakespeareGenerateNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShakespeareGenerateNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
