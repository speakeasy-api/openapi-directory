import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactmethodverificationprotocol_enum as shared_contactmethodverificationprotocol_enum


@dataclass_json
@dataclasses.dataclass
class SendContactMethodVerificationRequest:
    protocol: shared_contactmethodverificationprotocol_enum.ContactMethodVerificationProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
