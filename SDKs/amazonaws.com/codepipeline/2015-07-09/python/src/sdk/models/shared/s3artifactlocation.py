import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3ArtifactLocation:
    r"""S3ArtifactLocation
    The location of the S3 bucket that contains a revision.
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    object_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectKey') }})
    
