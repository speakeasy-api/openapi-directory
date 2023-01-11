import dataclasses
from typing import Optional
from ..shared import behaviorentity as shared_behaviorentity


@dataclasses.dataclass
class PatchBehaviorsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchBehaviorsIDRequestBodyAttachmentFile:
    attachment_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'attachment_file' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class PatchBehaviorsIDRequestBody:
    attachment_file: Optional[PatchBehaviorsIDRequestBodyAttachmentFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    behavior: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'behavior' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'value' }})
    

@dataclasses.dataclass
class PatchBehaviorsIDRequest:
    path_params: PatchBehaviorsIDPathParams = dataclasses.field()
    request: Optional[PatchBehaviorsIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchBehaviorsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    behavior_entity: Optional[shared_behaviorentity.BehaviorEntity] = dataclasses.field(default=None)
    
