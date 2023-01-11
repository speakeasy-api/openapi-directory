import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleconfig as shared_ruleconfig
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class AssertionRule:
    r"""AssertionRule
    An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
    """
    
    asserted_controls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertedControls') }})
    control_panel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: shared_ruleconfig.RuleConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    safety_rule_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    status: shared_status_enum.StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    wait_period_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    
