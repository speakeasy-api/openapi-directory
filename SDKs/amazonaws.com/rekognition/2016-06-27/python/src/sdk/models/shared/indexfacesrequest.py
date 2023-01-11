import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute_enum as shared_attribute_enum
from ..shared import image as shared_image
from ..shared import qualityfilter_enum as shared_qualityfilter_enum


@dataclass_json
@dataclasses.dataclass
class IndexFacesRequest:
    collection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    detection_attributes: Optional[list[shared_attribute_enum.AttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectionAttributes') }})
    external_image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalImageId') }})
    max_faces: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFaces') }})
    quality_filter: Optional[shared_qualityfilter_enum.QualityFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    
