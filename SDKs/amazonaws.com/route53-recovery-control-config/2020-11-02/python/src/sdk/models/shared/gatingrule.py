import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleconfig as shared_ruleconfig
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class GatingRule:
    r"""GatingRule
    A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
    """
    
    control_panel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    gating_controls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingControls') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: shared_ruleconfig.RuleConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    safety_rule_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    status: shared_status_enum.StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_controls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetControls') }})
    wait_period_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    
