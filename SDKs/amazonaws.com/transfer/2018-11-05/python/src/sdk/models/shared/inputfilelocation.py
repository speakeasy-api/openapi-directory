import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import efsfilelocation as shared_efsfilelocation
from ..shared import s3inputfilelocation as shared_s3inputfilelocation


@dataclass_json
@dataclasses.dataclass
class InputFileLocation:
    r"""InputFileLocation
    Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
    """
    
    efs_file_location: Optional[shared_efsfilelocation.EfsFileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFileLocation') }})
    s3_file_location: Optional[shared_s3inputfilelocation.S3InputFileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3FileLocation') }})
    
