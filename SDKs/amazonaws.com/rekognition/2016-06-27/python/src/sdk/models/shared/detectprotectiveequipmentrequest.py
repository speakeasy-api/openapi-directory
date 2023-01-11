import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import protectiveequipmentsummarizationattributes as shared_protectiveequipmentsummarizationattributes


@dataclass_json
@dataclasses.dataclass
class DetectProtectiveEquipmentRequest:
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    summarization_attributes: Optional[shared_protectiveequipmentsummarizationattributes.ProtectiveEquipmentSummarizationAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummarizationAttributes') }})
    
