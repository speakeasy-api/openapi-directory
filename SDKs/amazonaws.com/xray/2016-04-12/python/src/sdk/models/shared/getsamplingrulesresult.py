import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingrulerecord as shared_samplingrulerecord


@dataclass_json
@dataclasses.dataclass
class GetSamplingRulesResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sampling_rule_records: Optional[list[shared_samplingrulerecord.SamplingRuleRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingRuleRecords') }})
    
