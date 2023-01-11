import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uploadbehavior_enum as shared_uploadbehavior_enum


@dataclass_json
@dataclasses.dataclass
class UploadConfiguration:
    r"""UploadConfiguration
    Provides upload configuration information. Files are uploaded from the simulation job to a location you specify. 
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    upload_behavior: shared_uploadbehavior_enum.UploadBehaviorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadBehavior') }})
    
