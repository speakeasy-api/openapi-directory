import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetShakespeareGenerateInsultQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShakespeareGenerateInsultSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetShakespeareGenerateInsultRequest:
    query_params: GetShakespeareGenerateInsultQueryParams = dataclasses.field()
    security: GetShakespeareGenerateInsultSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShakespeareGenerateInsultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
