import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequency as shared_frequency
from ..shared import polarization_enum as shared_polarization_enum


@dataclass_json
@dataclasses.dataclass
class UplinkSpectrumConfig:
    r"""UplinkSpectrumConfig
    Information about the uplink spectral <code>Config</code>.
    """
    
    center_frequency: shared_frequency.Frequency = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerFrequency') }})
    polarization: Optional[shared_polarization_enum.PolarizationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polarization') }})
    
