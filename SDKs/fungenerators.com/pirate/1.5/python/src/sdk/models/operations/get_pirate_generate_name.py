import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPirateGenerateNameQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPirateGenerateNameSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPirateGenerateNameRequest:
    query_params: GetPirateGenerateNameQueryParams = dataclasses.field()
    security: GetPirateGenerateNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPirateGenerateNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
