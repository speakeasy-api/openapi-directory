import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datum as shared_datum


@dataclass_json
@dataclasses.dataclass
class Row:
    r"""Row
    The rows that comprise a query result table.
    """
    
    data: Optional[list[shared_datum.Datum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
