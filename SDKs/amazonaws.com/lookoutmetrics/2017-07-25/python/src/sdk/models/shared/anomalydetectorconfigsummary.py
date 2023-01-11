import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequency_enum as shared_frequency_enum


@dataclass_json
@dataclasses.dataclass
class AnomalyDetectorConfigSummary:
    r"""AnomalyDetectorConfigSummary
    Contains information about a detector's configuration.
    """
    
    anomaly_detector_frequency: Optional[shared_frequency_enum.FrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorFrequency') }})
    
