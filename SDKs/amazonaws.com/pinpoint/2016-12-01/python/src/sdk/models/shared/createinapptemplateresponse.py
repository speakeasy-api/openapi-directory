import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templatecreatemessagebody as shared_templatecreatemessagebody


@dataclass_json
@dataclasses.dataclass
class CreateInAppTemplateResponse:
    template_create_message_body: shared_templatecreatemessagebody.TemplateCreateMessageBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateCreateMessageBody') }})
    
