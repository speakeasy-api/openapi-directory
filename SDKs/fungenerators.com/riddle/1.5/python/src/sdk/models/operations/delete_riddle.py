import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteRiddleQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteRiddleSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteRiddleRequest:
    query_params: DeleteRiddleQueryParams = dataclasses.field()
    security: DeleteRiddleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRiddleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
