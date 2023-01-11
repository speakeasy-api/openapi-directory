import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FailedIpn:
    action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    contractaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    ethereumaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
