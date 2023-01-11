import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import macseckey as shared_macseckey


@dataclass_json
@dataclasses.dataclass
class AssociateMacSecKeyResponse:
    connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    mac_sec_keys: Optional[list[shared_macseckey.MacSecKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecKeys') }})
    
