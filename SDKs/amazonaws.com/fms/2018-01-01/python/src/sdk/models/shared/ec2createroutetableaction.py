import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class Ec2CreateRouteTableAction:
    r"""Ec2CreateRouteTableAction
    Information about the CreateRouteTable action in Amazon EC2.
    """
    
    vpc_id: shared_actiontarget.ActionTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
