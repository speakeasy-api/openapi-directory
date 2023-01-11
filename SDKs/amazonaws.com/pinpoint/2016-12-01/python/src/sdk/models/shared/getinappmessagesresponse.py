import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagesresponse as shared_inappmessagesresponse


@dataclass_json
@dataclasses.dataclass
class GetInAppMessagesResponse:
    in_app_messages_response: shared_inappmessagesresponse.InAppMessagesResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessagesResponse') }})
    
