import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryexecution as shared_queryexecution


@dataclass_json
@dataclasses.dataclass
class GetQueryExecutionOutput:
    query_execution: Optional[shared_queryexecution.QueryExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecution') }})
    
