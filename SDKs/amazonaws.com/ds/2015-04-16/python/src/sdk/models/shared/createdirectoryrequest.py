import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directorysize_enum as shared_directorysize_enum
from ..shared import tag as shared_tag
from ..shared import directoryvpcsettings as shared_directoryvpcsettings


@dataclass_json
@dataclasses.dataclass
class CreateDirectoryRequest:
    r"""CreateDirectoryRequest
    Contains the inputs for the <a>CreateDirectory</a> operation. 
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    size: shared_directorysize_enum.DirectorySizeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    short_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_settings: Optional[shared_directoryvpcsettings.DirectoryVpcSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
