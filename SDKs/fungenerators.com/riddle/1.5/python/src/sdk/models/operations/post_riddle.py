import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRiddleQueryParams:
    answer: str = dataclasses.field(metadata={'query_param': { 'field_name': 'answer', 'style': 'form', 'explode': True }})
    category: str = dataclasses.field(metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    question: str = dataclasses.field(metadata={'query_param': { 'field_name': 'question', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRiddleSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostRiddleRequest:
    query_params: PostRiddleQueryParams = dataclasses.field()
    security: PostRiddleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRiddleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
