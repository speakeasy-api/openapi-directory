import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagetagmutability_enum as shared_imagetagmutability_enum


@dataclass_json
@dataclasses.dataclass
class PutImageTagMutabilityRequest:
    image_tag_mutability: shared_imagetagmutability_enum.ImageTagMutabilityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagMutability') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
