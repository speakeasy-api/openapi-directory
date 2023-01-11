import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomerManagedS3Storage:
    r"""CustomerManagedS3Storage
    Contains information about a customer managed Amazon S3 bucket.
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    s3_resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3ResourceArn') }})
    
