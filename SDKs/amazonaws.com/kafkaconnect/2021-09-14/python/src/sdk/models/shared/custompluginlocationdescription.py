import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3locationdescription as shared_s3locationdescription


@dataclass_json
@dataclasses.dataclass
class CustomPluginLocationDescription:
    r"""CustomPluginLocationDescription
    Information about the location of a custom plugin.
    """
    
    s3_location: Optional[shared_s3locationdescription.S3LocationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    
