import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequencyunits_enum as shared_frequencyunits_enum


@dataclass_json
@dataclasses.dataclass
class Frequency:
    r"""Frequency
    Object that describes the frequency.
    """
    
    units: shared_frequencyunits_enum.FrequencyUnitsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
