import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetShakespeareGenerateLoremIpsumQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShakespeareGenerateLoremIpsumSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetShakespeareGenerateLoremIpsumRequest:
    query_params: GetShakespeareGenerateLoremIpsumQueryParams = dataclasses.field()
    security: GetShakespeareGenerateLoremIpsumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShakespeareGenerateLoremIpsumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
