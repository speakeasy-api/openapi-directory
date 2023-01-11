import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateBucketRequest:
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    enable_object_versioning: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableObjectVersioning') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
