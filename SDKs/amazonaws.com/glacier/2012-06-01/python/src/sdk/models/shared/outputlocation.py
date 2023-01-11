import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location


@dataclass_json
@dataclasses.dataclass
class OutputLocation:
    r"""OutputLocation
    Contains information about the location where the select job results are stored.
    """
    
    s3: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    
