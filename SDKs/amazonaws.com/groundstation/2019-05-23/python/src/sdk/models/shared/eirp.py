import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eirpunits_enum as shared_eirpunits_enum


@dataclass_json
@dataclasses.dataclass
class Eirp:
    r"""Eirp
    Object that represents EIRP.
    """
    
    units: shared_eirpunits_enum.EirpUnitsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
