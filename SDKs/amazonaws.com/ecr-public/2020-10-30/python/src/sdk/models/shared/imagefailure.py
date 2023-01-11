import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefailurecode_enum as shared_imagefailurecode_enum
from ..shared import imageidentifier as shared_imageidentifier


@dataclass_json
@dataclasses.dataclass
class ImageFailure:
    r"""ImageFailure
    An object representing an Amazon ECR image failure.
    """
    
    failure_code: Optional[shared_imagefailurecode_enum.ImageFailureCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    image_id: Optional[shared_imageidentifier.ImageIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    
