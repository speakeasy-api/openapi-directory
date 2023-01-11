import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageconfigerror as shared_imageconfigerror
from ..shared import imageconfig as shared_imageconfig


@dataclass_json
@dataclasses.dataclass
class ImageConfigResponse:
    r"""ImageConfigResponse
    Response to GetFunctionConfiguration request.
    """
    
    error: Optional[shared_imageconfigerror.ImageConfigError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    image_config: Optional[shared_imageconfig.ImageConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfig') }})
    
