import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnsubscribeAddress:
    contractaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    deleted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    ethereumaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
