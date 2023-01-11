import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceschema as shared_sourceschema


@dataclass_json
@dataclasses.dataclass
class DiscoverInputSchemaResponse:
    r"""DiscoverInputSchemaResponse
    <p/>
    """
    
    input_schema: Optional[shared_sourceschema.SourceSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    parsed_input_records: Optional[list[list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParsedInputRecords') }})
    processed_input_records: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedInputRecords') }})
    raw_input_records: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawInputRecords') }})
    
