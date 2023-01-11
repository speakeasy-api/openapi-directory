import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Vpc:
    r"""Vpc
    Information about the VPC in which the connector resides.
    """
    
    subnets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
