import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualityfilter_enum as shared_qualityfilter_enum
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class CompareFacesRequest:
    source_image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImage') }})
    target_image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetImage') }})
    quality_filter: Optional[shared_qualityfilter_enum.QualityFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    similarity_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimilarityThreshold') }})
    
