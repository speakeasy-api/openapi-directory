import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordcolumn as shared_recordcolumn
from ..shared import recordformat as shared_recordformat


@dataclass_json
@dataclasses.dataclass
class SourceSchema:
    r"""SourceSchema
    For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. 
    """
    
    record_columns: list[shared_recordcolumn.RecordColumn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordColumns') }})
    record_format: shared_recordformat.RecordFormat = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormat') }})
    record_encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordEncoding') }})
    
