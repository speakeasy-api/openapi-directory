import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createtemplatemessagebody as shared_createtemplatemessagebody


@dataclass_json
@dataclasses.dataclass
class CreatePushTemplateResponse:
    create_template_message_body: shared_createtemplatemessagebody.CreateTemplateMessageBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTemplateMessageBody') }})
    
