import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingrulerecord as shared_samplingrulerecord


@dataclass_json
@dataclasses.dataclass
class UpdateSamplingRuleResult:
    sampling_rule_record: Optional[shared_samplingrulerecord.SamplingRuleRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingRuleRecord') }})
    
