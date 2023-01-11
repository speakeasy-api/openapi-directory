import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListDeliveryStreamsOutput:
    delivery_stream_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamNames') }})
    has_more_delivery_streams: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreDeliveryStreams') }})
    
