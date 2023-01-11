import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetLastBlockNumber:
    blocknumber: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocknumber') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
