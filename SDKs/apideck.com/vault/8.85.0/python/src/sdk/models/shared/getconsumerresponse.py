import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumer as shared_consumer


@dataclass_json
@dataclasses.dataclass
class GetConsumerResponse:
    data: shared_consumer.Consumer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
