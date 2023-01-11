import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagepipeline as shared_imagepipeline


@dataclass_json
@dataclasses.dataclass
class ListImagePipelinesResponse:
    image_pipeline_list: Optional[list[shared_imagepipeline.ImagePipeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePipelineList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
