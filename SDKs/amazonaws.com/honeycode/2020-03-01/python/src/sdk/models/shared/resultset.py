import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnmetadata as shared_columnmetadata
from ..shared import resultrow as shared_resultrow


@dataclass_json
@dataclasses.dataclass
class ResultSet:
    headers: Optional[list[shared_columnmetadata.ColumnMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: Optional[list[shared_resultrow.ResultRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
