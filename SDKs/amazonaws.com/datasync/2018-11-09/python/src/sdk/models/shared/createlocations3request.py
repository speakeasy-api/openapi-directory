import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3config as shared_s3config
from ..shared import s3storageclass_enum as shared_s3storageclass_enum
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationS3Request:
    r"""CreateLocationS3Request
    CreateLocationS3Request
    """
    
    s3_bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketArn') }})
    s3_config: shared_s3config.S3Config = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    agent_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    s3_storage_class: Optional[shared_s3storageclass_enum.S3StorageClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StorageClass') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
