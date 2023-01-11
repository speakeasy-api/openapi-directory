import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class ListAddresses:
    addresses: list[shared_address.Address] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
