import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignpublicip_enum as shared_assignpublicip_enum


@dataclass_json
@dataclasses.dataclass
class AwsVpcConfiguration:
    r"""AwsVpcConfiguration
    An object representing the networking details for a task or service.
    """
    
    subnets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    assign_public_ip: Optional[shared_assignpublicip_enum.AssignPublicIPEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
