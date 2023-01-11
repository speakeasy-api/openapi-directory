import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import record as shared_record


@dataclass_json
@dataclasses.dataclass
class PutRecordBatchInput:
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    records: list[shared_record.Record] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    
