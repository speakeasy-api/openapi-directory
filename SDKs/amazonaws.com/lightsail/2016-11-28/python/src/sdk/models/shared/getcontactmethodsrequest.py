import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactprotocol_enum as shared_contactprotocol_enum


@dataclass_json
@dataclasses.dataclass
class GetContactMethodsRequest:
    protocols: Optional[list[shared_contactprotocol_enum.ContactProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    
