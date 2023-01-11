import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingimage as shared_streamingimage


@dataclass_json
@dataclasses.dataclass
class ListStreamingImagesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    streaming_images: Optional[list[shared_streamingimage.StreamingImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImages') }})
    
