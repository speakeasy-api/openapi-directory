import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costtype_enum as shared_costtype_enum


@dataclass_json
@dataclasses.dataclass
class CostSettings:
    r"""CostSettings
    If this property is not indicated please force the user to configure the cost settings.
    Defines the cost type you have on this channel with the cost value.
    
    """
    
    cost_type: shared_costtype_enum.CostTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costType') }})
    global_cost_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalCostValue') }})
    
