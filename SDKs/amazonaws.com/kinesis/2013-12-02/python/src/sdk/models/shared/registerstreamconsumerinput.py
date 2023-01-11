import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterStreamConsumerInput:
    consumer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerName') }})
    stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    
