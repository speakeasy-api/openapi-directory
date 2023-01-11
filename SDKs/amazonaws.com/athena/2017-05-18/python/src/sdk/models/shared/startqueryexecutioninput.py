import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryexecutioncontext as shared_queryexecutioncontext
from ..shared import resultconfiguration as shared_resultconfiguration


@dataclass_json
@dataclasses.dataclass
class StartQueryExecutionInput:
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    query_execution_context: Optional[shared_queryexecutioncontext.QueryExecutionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionContext') }})
    result_configuration: Optional[shared_resultconfiguration.ResultConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    work_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
