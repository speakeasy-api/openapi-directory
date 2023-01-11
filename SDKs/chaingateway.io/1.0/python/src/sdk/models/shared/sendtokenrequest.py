import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendTokenRequest:
    amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    contractaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
