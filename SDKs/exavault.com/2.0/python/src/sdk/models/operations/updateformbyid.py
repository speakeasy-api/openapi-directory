import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formresponse as shared_formresponse


@dataclasses.dataclass
class UpdateFormByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFormByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateFormByIDUpdateFormByIDRequestBodyElementsSettings:
    is_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    sender_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderEmail') }})
    use_as_folder_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAsFolderName') }})
    
class UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum(str, Enum):
    NAME = "name"
    EMAIL = "email"
    TEXT = "text"
    TEXTAREA = "textarea"
    UPLOAD_AREA = "upload_area"


@dataclass_json
@dataclasses.dataclass
class UpdateFormByIDUpdateFormByIDRequestBodyElements:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    settings: Optional[UpdateFormByIDUpdateFormByIDRequestBodyElementsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateFormByIDUpdateFormByIDRequestBody:
    r"""UpdateFormByIDUpdateFormByIDRequestBody
    CSS Styles of the form.
    """
    
    css_styles: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cssStyles') }})
    elements: Optional[list[UpdateFormByIDUpdateFormByIDRequestBodyElements]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    form_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formDescription') }})
    submit_button_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitButtonText') }})
    success_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successMessage') }})
    

@dataclasses.dataclass
class UpdateFormByIDRequest:
    headers: UpdateFormByIDHeaders = dataclasses.field()
    path_params: UpdateFormByIDPathParams = dataclasses.field()
    request: Optional[UpdateFormByIDUpdateFormByIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateFormByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_response: Optional[shared_formresponse.FormResponse] = dataclasses.field(default=None)
    
