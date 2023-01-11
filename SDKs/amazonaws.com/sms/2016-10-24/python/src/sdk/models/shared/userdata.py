import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location


@dataclass_json
@dataclasses.dataclass
class UserData:
    r"""UserData
    A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
    """
    
    s3_location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    
