import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UntagDeliveryStreamInput:
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    tag_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
