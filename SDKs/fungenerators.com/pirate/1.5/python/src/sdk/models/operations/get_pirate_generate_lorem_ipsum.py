import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPirateGenerateLoremIpsumQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPirateGenerateLoremIpsumSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPirateGenerateLoremIpsumRequest:
    query_params: GetPirateGenerateLoremIpsumQueryParams = dataclasses.field()
    security: GetPirateGenerateLoremIpsumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPirateGenerateLoremIpsumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
