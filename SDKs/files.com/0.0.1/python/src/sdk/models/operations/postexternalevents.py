import dataclasses
from typing import Optional
from enum import Enum
from ..shared import externalevententity as shared_externalevententity

class PostExternalEventsRequestBodyStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    PARTIAL_FAILURE = "partial_failure"


@dataclasses.dataclass
class PostExternalEventsRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    status: PostExternalEventsRequestBodyStatusEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclasses.dataclass
class PostExternalEventsRequest:
    request: PostExternalEventsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostExternalEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    external_event_entity: Optional[shared_externalevententity.ExternalEventEntity] = dataclasses.field(default=None)
    
