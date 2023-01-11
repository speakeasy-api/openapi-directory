import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FirehoseLogDeliveryDescription:
    r"""FirehoseLogDeliveryDescription
    A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
    """
    
    delivery_stream: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStream') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
