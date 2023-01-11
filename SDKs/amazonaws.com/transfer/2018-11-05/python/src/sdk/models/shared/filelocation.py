import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import efsfilelocation as shared_efsfilelocation
from ..shared import s3filelocation as shared_s3filelocation


@dataclass_json
@dataclasses.dataclass
class FileLocation:
    r"""FileLocation
    Specifies the Amazon S3 or EFS file details to be used in the step.
    """
    
    efs_file_location: Optional[shared_efsfilelocation.EfsFileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFileLocation') }})
    s3_file_location: Optional[shared_s3filelocation.S3FileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3FileLocation') }})
    
