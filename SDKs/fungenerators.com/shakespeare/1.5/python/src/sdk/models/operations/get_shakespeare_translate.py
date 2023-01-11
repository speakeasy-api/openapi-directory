import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetShakespeareTranslateQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShakespeareTranslateSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetShakespeareTranslateRequest:
    query_params: GetShakespeareTranslateQueryParams = dataclasses.field()
    security: GetShakespeareTranslateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShakespeareTranslateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
