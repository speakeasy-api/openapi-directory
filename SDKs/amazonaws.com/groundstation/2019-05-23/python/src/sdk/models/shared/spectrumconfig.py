import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequencybandwidth as shared_frequencybandwidth
from ..shared import frequency as shared_frequency
from ..shared import polarization_enum as shared_polarization_enum


@dataclass_json
@dataclasses.dataclass
class SpectrumConfig:
    r"""SpectrumConfig
    Object that describes a spectral <code>Config</code>.
    """
    
    bandwidth: shared_frequencybandwidth.FrequencyBandwidth = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    center_frequency: shared_frequency.Frequency = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerFrequency') }})
    polarization: Optional[shared_polarization_enum.PolarizationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polarization') }})
    
