import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resultsetmetadata as shared_resultsetmetadata
from ..shared import row as shared_row


@dataclass_json
@dataclasses.dataclass
class ResultSet:
    r"""ResultSet
    The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
    """
    
    result_set_metadata: Optional[shared_resultsetmetadata.ResultSetMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultSetMetadata') }})
    rows: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
