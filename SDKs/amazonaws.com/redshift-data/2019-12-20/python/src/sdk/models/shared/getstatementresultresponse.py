import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnmetadata as shared_columnmetadata
from ..shared import field as shared_field


@dataclass_json
@dataclasses.dataclass
class GetStatementResultResponse:
    records: list[list[shared_field.Field]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    column_metadata: Optional[list[shared_columnmetadata.ColumnMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnMetadata') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    total_num_rows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumRows') }})
    
