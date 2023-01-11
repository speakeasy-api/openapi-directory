import dataclasses
from typing import Optional
from ..shared import behaviorentity as shared_behaviorentity


@dataclasses.dataclass
class PostBehaviorsRequestBodyAttachmentFile:
    attachment_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'attachment_file' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class PostBehaviorsRequestBody:
    behavior: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'behavior' }})
    path: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'path' }})
    attachment_file: Optional[PostBehaviorsRequestBodyAttachmentFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'value' }})
    

@dataclasses.dataclass
class PostBehaviorsRequest:
    request: Optional[PostBehaviorsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostBehaviorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    behavior_entity: Optional[shared_behaviorentity.BehaviorEntity] = dataclasses.field(default=None)
    
