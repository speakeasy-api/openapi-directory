import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3ReferenceDataSourceDescription:
    r"""S3ReferenceDataSourceDescription
    Provides the bucket name and object key name that stores the reference data.
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    reference_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceRoleARN') }})
    
