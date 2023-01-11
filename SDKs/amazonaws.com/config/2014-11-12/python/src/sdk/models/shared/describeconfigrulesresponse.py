import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configrule as shared_configrule


@dataclass_json
@dataclasses.dataclass
class DescribeConfigRulesResponse:
    r"""DescribeConfigRulesResponse
    <p/>
    """
    
    config_rules: Optional[list[shared_configrule.ConfigRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRules') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
