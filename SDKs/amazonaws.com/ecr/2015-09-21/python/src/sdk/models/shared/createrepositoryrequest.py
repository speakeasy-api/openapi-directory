import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import imagescanningconfiguration as shared_imagescanningconfiguration
from ..shared import imagetagmutability_enum as shared_imagetagmutability_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateRepositoryRequest:
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfiguration') }})
    image_scanning_configuration: Optional[shared_imagescanningconfiguration.ImageScanningConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanningConfiguration') }})
    image_tag_mutability: Optional[shared_imagetagmutability_enum.ImageTagMutabilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagMutability') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
