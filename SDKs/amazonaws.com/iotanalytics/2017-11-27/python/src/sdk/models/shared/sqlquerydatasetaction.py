import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryfilter as shared_queryfilter


@dataclass_json
@dataclasses.dataclass
class SQLQueryDatasetAction:
    r"""SQLQueryDatasetAction
    The SQL query to modify the message.
    """
    
    sql_query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlQuery') }})
    filters: Optional[list[shared_queryfilter.QueryFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    
