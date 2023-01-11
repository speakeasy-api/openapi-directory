import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostUUIDQueryParams:
    uuidstr: str = dataclasses.field(metadata={'query_param': { 'field_name': 'uuidstr', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostUUIDSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostUUIDRequest:
    query_params: PostUUIDQueryParams = dataclasses.field()
    security: PostUUIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
