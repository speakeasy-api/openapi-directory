import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteBucketRequest:
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    force_delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceDelete') }})
    
