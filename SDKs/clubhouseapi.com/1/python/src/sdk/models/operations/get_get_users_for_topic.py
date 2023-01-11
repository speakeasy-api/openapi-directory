import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGetUsersForTopicQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    topic_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topic_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetUsersForTopicRequest:
    query_params: GetGetUsersForTopicQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetUsersForTopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
