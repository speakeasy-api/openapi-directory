import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configrulestate_enum as shared_configrulestate_enum
from ..shared import maximumexecutionfrequency_enum as shared_maximumexecutionfrequency_enum
from ..shared import scope as shared_scope
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class ConfigRule:
    r"""ConfigRule
    <p>An Config rule represents an Lambda function that you create for a custom rule or a predefined function for an Config managed rule. The function evaluates configuration items to assess whether your Amazon Web Services resources comply with your desired configurations. This function can run when Config detects a configuration change to an Amazon Web Services resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using Config rules, see <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html\">Evaluating Amazon Web Services resource Configurations with Config</a> in the <i>Config Developer Guide</i>.</p>
    """
    
    source: shared_source.Source = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    config_rule_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleArn') }})
    config_rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleId') }})
    config_rule_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    config_rule_state: Optional[shared_configrulestate_enum.ConfigRuleStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleState') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    input_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParameters') }})
    maximum_execution_frequency: Optional[shared_maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionFrequency') }})
    scope: Optional[shared_scope.Scope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scope') }})
    
