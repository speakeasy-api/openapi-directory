import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import content_reference_attachment as shared_content_reference_attachment
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsCreateContentAttachmentPathParams:
    content_reference_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'content_reference_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsCreateContentAttachmentRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class AppsCreateContentAttachment415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AppsCreateContentAttachmentRequest:
    path_params: AppsCreateContentAttachmentPathParams = dataclasses.field()
    request: Optional[AppsCreateContentAttachmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppsCreateContentAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_create_content_attachment_415_application_json_object: Optional[AppsCreateContentAttachment415ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    content_reference_attachment: Optional[shared_content_reference_attachment.ContentReferenceAttachment] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
