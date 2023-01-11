import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timebasedcanary as shared_timebasedcanary
from ..shared import timebasedlinear as shared_timebasedlinear
from ..shared import trafficroutingtype_enum as shared_trafficroutingtype_enum


@dataclass_json
@dataclasses.dataclass
class TrafficRoutingConfig:
    r"""TrafficRoutingConfig
    The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
    """
    
    time_based_canary: Optional[shared_timebasedcanary.TimeBasedCanary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeBasedCanary') }})
    time_based_linear: Optional[shared_timebasedlinear.TimeBasedLinear] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeBasedLinear') }})
    type: Optional[shared_trafficroutingtype_enum.TrafficRoutingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
