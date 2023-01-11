import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import record as shared_record


@dataclass_json
@dataclasses.dataclass
class WriteRecordsRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    records: list[shared_record.Record] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    common_attributes: Optional[shared_record.Record] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommonAttributes') }})
    
