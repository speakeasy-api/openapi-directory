import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagebody as shared_messagebody


@dataclass_json
@dataclasses.dataclass
class UpdateEndpointResponse:
    message_body: shared_messagebody.MessageBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageBody') }})
    
