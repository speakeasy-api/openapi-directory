import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bandwidthunits_enum as shared_bandwidthunits_enum


@dataclass_json
@dataclasses.dataclass
class FrequencyBandwidth:
    r"""FrequencyBandwidth
    Object that describes the frequency bandwidth. 
    """
    
    units: shared_bandwidthunits_enum.BandwidthUnitsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
