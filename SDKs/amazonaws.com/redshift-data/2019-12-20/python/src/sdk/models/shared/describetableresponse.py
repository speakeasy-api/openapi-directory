import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnmetadata as shared_columnmetadata


@dataclass_json
@dataclasses.dataclass
class DescribeTableResponse:
    column_list: Optional[list[shared_columnmetadata.ColumnMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
