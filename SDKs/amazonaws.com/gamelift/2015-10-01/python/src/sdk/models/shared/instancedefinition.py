import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroupinstancetype_enum as shared_gameservergroupinstancetype_enum


@dataclass_json
@dataclasses.dataclass
class InstanceDefinition:
    r"""InstanceDefinition
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a <a>GameServerGroup</a>. All game server groups must have at least two instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>
    """
    
    instance_type: shared_gameservergroupinstancetype_enum.GameServerGroupInstanceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    weighted_capacity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeightedCapacity') }})
    
