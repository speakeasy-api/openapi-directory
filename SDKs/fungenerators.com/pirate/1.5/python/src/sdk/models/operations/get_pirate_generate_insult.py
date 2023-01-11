import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPirateGenerateInsultQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPirateGenerateInsultSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPirateGenerateInsultRequest:
    query_params: GetPirateGenerateInsultQueryParams = dataclasses.field()
    security: GetPirateGenerateInsultSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPirateGenerateInsultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
