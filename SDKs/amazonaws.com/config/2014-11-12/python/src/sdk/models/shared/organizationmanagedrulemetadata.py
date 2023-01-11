import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import maximumexecutionfrequency_enum as shared_maximumexecutionfrequency_enum


@dataclass_json
@dataclasses.dataclass
class OrganizationManagedRuleMetadata:
    r"""OrganizationManagedRuleMetadata
    An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
    """
    
    rule_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleIdentifier') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    input_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParameters') }})
    maximum_execution_frequency: Optional[shared_maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionFrequency') }})
    resource_id_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdScope') }})
    resource_types_scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypesScope') }})
    tag_key_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeyScope') }})
    tag_value_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValueScope') }})
    
