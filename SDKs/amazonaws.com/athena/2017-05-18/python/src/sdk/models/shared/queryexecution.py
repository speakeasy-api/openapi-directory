import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineversion as shared_engineversion
from ..shared import queryexecutioncontext as shared_queryexecutioncontext
from ..shared import resultconfiguration as shared_resultconfiguration
from ..shared import statementtype_enum as shared_statementtype_enum
from ..shared import queryexecutionstatistics as shared_queryexecutionstatistics
from ..shared import queryexecutionstatus as shared_queryexecutionstatus


@dataclass_json
@dataclasses.dataclass
class QueryExecution:
    r"""QueryExecution
    Information about a single instance of a query execution.
    """
    
    engine_version: Optional[shared_engineversion.EngineVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Query') }})
    query_execution_context: Optional[shared_queryexecutioncontext.QueryExecutionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionContext') }})
    query_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionId') }})
    result_configuration: Optional[shared_resultconfiguration.ResultConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    statement_type: Optional[shared_statementtype_enum.StatementTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementType') }})
    statistics: Optional[shared_queryexecutionstatistics.QueryExecutionStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistics') }})
    status: Optional[shared_queryexecutionstatus.QueryExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    work_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
