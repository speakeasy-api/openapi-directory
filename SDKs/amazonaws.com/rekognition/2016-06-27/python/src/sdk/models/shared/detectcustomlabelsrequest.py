import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class DetectCustomLabelsRequest:
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    project_version_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionArn') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    min_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
