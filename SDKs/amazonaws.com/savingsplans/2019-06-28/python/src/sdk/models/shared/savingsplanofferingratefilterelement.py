import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savingsplanratefilterattribute_enum as shared_savingsplanratefilterattribute_enum


@dataclass_json
@dataclasses.dataclass
class SavingsPlanOfferingRateFilterElement:
    r"""SavingsPlanOfferingRateFilterElement
    Information about a filter.
    """
    
    name: Optional[shared_savingsplanratefilterattribute_enum.SavingsPlanRateFilterAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
