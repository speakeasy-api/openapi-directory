import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleexecutionreporting as shared_ruleexecutionreporting
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class RuleExecutionReportings:
    executions: Optional[list[shared_ruleexecutionreporting.RuleExecutionReporting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    
