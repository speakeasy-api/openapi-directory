import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageconfiguration as shared_imageconfiguration
from ..shared import imagerepositorytype_enum as shared_imagerepositorytype_enum


@dataclass_json
@dataclasses.dataclass
class ImageRepository:
    r"""ImageRepository
    Describes a source image repository.
    """
    
    image_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageIdentifier') }})
    image_repository_type: shared_imagerepositorytype_enum.ImageRepositoryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageRepositoryType') }})
    image_configuration: Optional[shared_imageconfiguration.ImageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfiguration') }})
    
