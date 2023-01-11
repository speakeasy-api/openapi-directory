import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import timestamprange as shared_timestamprange
from ..shared import severity_enum as shared_severity_enum


@dataclass_json
@dataclasses.dataclass
class FindingFilter:
    r"""FindingFilter
    This data type is used as a request parameter in the <a>ListFindings</a> action.
    """
    
    agent_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentIds') }})
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    auto_scaling_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    creation_time_range: Optional[shared_timestamprange.TimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimeRange') }})
    rule_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleNames') }})
    rules_package_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    severities: Optional[list[shared_severity_enum.SeverityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severities') }})
    user_attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    
