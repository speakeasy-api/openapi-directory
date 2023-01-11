import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagebody as shared_messagebody


@dataclass_json
@dataclasses.dataclass
class DeleteEmailTemplateResponse:
    message_body: shared_messagebody.MessageBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageBody') }})
    
