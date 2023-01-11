import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverystreamdescription as shared_deliverystreamdescription


@dataclass_json
@dataclasses.dataclass
class DescribeDeliveryStreamOutput:
    delivery_stream_description: shared_deliverystreamdescription.DeliveryStreamDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamDescription') }})
    
