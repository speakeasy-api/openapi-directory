import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3ReferenceDataSourceDescription:
    r"""S3ReferenceDataSourceDescription
    For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    reference_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceRoleARN') }})
    
