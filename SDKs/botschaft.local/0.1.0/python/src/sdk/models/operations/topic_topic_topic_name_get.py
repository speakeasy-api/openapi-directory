import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class TopicTopicTopicNameGetPathParams:
    topic_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'topic_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TopicTopicTopicNameGetQueryParams:
    base64_message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TopicTopicTopicNameGetHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TopicTopicTopicNameGetRequest:
    headers: TopicTopicTopicNameGetHeaders = dataclasses.field()
    path_params: TopicTopicTopicNameGetPathParams = dataclasses.field()
    query_params: TopicTopicTopicNameGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TopicTopicTopicNameGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    topic_topic_topic_name_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
