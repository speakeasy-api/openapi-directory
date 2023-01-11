import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateWebACLMigrationStackRequest:
    ignore_unsupported_type: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreUnsupportedType') }})
    s3_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    web_acl_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    
