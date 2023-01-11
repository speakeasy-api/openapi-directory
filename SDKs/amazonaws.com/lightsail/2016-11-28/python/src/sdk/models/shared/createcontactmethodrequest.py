import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactprotocol_enum as shared_contactprotocol_enum


@dataclass_json
@dataclasses.dataclass
class CreateContactMethodRequest:
    contact_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEndpoint') }})
    protocol: shared_contactprotocol_enum.ContactProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
