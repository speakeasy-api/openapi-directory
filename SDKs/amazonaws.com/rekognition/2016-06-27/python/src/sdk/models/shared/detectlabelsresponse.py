import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label
from ..shared import orientationcorrection_enum as shared_orientationcorrection_enum


@dataclass_json
@dataclasses.dataclass
class DetectLabelsResponse:
    label_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelModelVersion') }})
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    
