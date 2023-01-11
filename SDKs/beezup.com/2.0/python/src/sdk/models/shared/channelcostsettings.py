import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costtype_enum as shared_costtype_enum


@dataclass_json
@dataclasses.dataclass
class ChannelCostSettings:
    r"""ChannelCostSettings
    Indicate the default configuration of the cost on this channel.
    """
    
    cost_type: shared_costtype_enum.CostTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costType') }})
    global_cost_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalCostValue') }})
    
