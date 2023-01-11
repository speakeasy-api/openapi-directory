import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryexecution as shared_queryexecution
from ..shared import unprocessedqueryexecutionid as shared_unprocessedqueryexecutionid


@dataclass_json
@dataclasses.dataclass
class BatchGetQueryExecutionOutput:
    query_executions: Optional[list[shared_queryexecution.QueryExecution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutions') }})
    unprocessed_query_execution_ids: Optional[list[shared_unprocessedqueryexecutionid.UnprocessedQueryExecutionID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedQueryExecutionIds') }})
    
