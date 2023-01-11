import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sendusersmessageresponse as shared_sendusersmessageresponse


@dataclass_json
@dataclasses.dataclass
class SendUsersMessagesResponse:
    send_users_message_response: shared_sendusersmessageresponse.SendUsersMessageResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendUsersMessageResponse') }})
    
