import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPirateTranslateQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPirateTranslateSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPirateTranslateRequest:
    query_params: GetPirateTranslateQueryParams = dataclasses.field()
    security: GetPirateTranslateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPirateTranslateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
