import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipn as shared_ipn


@dataclass_json
@dataclasses.dataclass
class ListSubscribedAddresses:
    ipns: list[shared_ipn.Ipn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipns') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
