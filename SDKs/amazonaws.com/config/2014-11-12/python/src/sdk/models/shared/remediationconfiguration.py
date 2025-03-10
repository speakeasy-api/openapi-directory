"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import executioncontrols as shared_executioncontrols
from ..shared import remediationparametervalue as shared_remediationparametervalue
from ..shared import remediationtargettype_enum as shared_remediationtargettype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RemediationConfiguration:
    r"""An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action."""
    
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConfigRuleName') }})  
    target_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TargetId') }})  
    target_type: shared_remediationtargettype_enum.RemediationTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TargetType') }})  
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Arn'), 'exclude': lambda f: f is None }})  
    automatic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Automatic'), 'exclude': lambda f: f is None }})  
    created_by_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreatedByService'), 'exclude': lambda f: f is None }})  
    execution_controls: Optional[shared_executioncontrols.ExecutionControls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ExecutionControls'), 'exclude': lambda f: f is None }})  
    maximum_automatic_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaximumAutomaticAttempts'), 'exclude': lambda f: f is None }})  
    parameters: Optional[dict[str, shared_remediationparametervalue.RemediationParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Parameters'), 'exclude': lambda f: f is None }})  
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceType'), 'exclude': lambda f: f is None }})  
    retry_attempt_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RetryAttemptSeconds'), 'exclude': lambda f: f is None }})  
    target_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TargetVersion'), 'exclude': lambda f: f is None }})  
    