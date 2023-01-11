import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storageclass_enum as shared_storageclass_enum


@dataclass_json
@dataclasses.dataclass
class PutObjectResponse:
    content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentSHA256') }})
    e_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ETag') }})
    storage_class: Optional[shared_storageclass_enum.StorageClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    
