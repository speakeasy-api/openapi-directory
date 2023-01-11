import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savingsplanofferingfilterattribute_enum as shared_savingsplanofferingfilterattribute_enum


@dataclass_json
@dataclasses.dataclass
class SavingsPlanOfferingFilterElement:
    r"""SavingsPlanOfferingFilterElement
    Information about a filter.
    """
    
    name: Optional[shared_savingsplanofferingfilterattribute_enum.SavingsPlanOfferingFilterAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
