import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketServerSideEncryptionByDefault:
    r"""AwsS3BucketServerSideEncryptionByDefault
    Specifies the default server-side encryption to apply to new objects in the bucket.
    """
    
    kms_master_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSMasterKeyID') }})
    sse_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEAlgorithm') }})
    
