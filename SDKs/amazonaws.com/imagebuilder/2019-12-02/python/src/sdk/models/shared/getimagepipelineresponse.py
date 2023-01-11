import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagepipeline as shared_imagepipeline


@dataclass_json
@dataclasses.dataclass
class GetImagePipelineResponse:
    image_pipeline: Optional[shared_imagepipeline.ImagePipeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePipeline') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
