import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executioncontrols as shared_executioncontrols
from ..shared import remediationparametervalue as shared_remediationparametervalue
from ..shared import remediationtargettype_enum as shared_remediationtargettype_enum


@dataclass_json
@dataclasses.dataclass
class RemediationConfiguration:
    r"""RemediationConfiguration
    An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
    """
    
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    target_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_type: shared_remediationtargettype_enum.RemediationTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    automatic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Automatic') }})
    created_by_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByService') }})
    execution_controls: Optional[shared_executioncontrols.ExecutionControls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionControls') }})
    maximum_automatic_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAutomaticAttempts') }})
    parameters: Optional[dict[str, shared_remediationparametervalue.RemediationParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    retry_attempt_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryAttemptSeconds') }})
    target_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetVersion') }})
    
