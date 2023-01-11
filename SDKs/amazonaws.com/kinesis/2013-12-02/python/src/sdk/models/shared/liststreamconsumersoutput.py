import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumer as shared_consumer


@dataclass_json
@dataclasses.dataclass
class ListStreamConsumersOutput:
    consumers: Optional[list[shared_consumer.Consumer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Consumers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
