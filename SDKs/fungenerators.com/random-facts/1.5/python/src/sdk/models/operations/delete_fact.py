import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFactQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteFactSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteFactRequest:
    query_params: DeleteFactQueryParams = dataclasses.field()
    security: DeleteFactSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
