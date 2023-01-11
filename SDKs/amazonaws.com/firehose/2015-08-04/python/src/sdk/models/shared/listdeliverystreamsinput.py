import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverystreamtype_enum as shared_deliverystreamtype_enum


@dataclass_json
@dataclasses.dataclass
class ListDeliveryStreamsInput:
    delivery_stream_type: Optional[shared_deliverystreamtype_enum.DeliveryStreamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    exclusive_start_delivery_stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartDeliveryStreamName') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
