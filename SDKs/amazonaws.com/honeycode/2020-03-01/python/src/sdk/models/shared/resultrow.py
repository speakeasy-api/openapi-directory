import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataitem as shared_dataitem


@dataclass_json
@dataclasses.dataclass
class ResultRow:
    r"""ResultRow
    A single row in the ResultSet.
    """
    
    data_items: list[shared_dataitem.DataItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    row_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowId') }})
    
