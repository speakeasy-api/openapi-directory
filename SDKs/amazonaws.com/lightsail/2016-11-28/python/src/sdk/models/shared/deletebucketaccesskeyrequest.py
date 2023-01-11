import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteBucketAccessKeyRequest:
    access_key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    
