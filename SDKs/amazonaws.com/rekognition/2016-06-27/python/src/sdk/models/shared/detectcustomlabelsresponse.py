import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customlabel as shared_customlabel


@dataclass_json
@dataclasses.dataclass
class DetectCustomLabelsResponse:
    custom_labels: Optional[list[shared_customlabel.CustomLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomLabels') }})
    
