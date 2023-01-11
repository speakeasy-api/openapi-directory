import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3RecordingDetails:
    r"""S3RecordingDetails
    Details about an S3 recording <code>Config</code> used in a contact.
    """
    
    bucket_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketArn') }})
    key_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTemplate') }})
    
