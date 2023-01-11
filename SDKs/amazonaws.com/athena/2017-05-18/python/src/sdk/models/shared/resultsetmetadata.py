import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columninfo as shared_columninfo


@dataclass_json
@dataclasses.dataclass
class ResultSetMetadata:
    r"""ResultSetMetadata
    The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
    """
    
    column_info: Optional[list[shared_columninfo.ColumnInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnInfo') }})
    
