import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import angleunits_enum as shared_angleunits_enum


@dataclass_json
@dataclasses.dataclass
class Elevation:
    r"""Elevation
    Elevation angle of the satellite in the sky during a contact.
    """
    
    unit: shared_angleunits_enum.AngleUnitsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
