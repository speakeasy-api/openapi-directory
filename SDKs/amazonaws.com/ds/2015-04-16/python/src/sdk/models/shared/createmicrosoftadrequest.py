import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directoryedition_enum as shared_directoryedition_enum
from ..shared import tag as shared_tag
from ..shared import directoryvpcsettings as shared_directoryvpcsettings


@dataclass_json
@dataclasses.dataclass
class CreateMicrosoftAdRequest:
    r"""CreateMicrosoftAdRequest
    Creates an Managed Microsoft AD directory.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    vpc_settings: shared_directoryvpcsettings.DirectoryVpcSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    edition: Optional[shared_directoryedition_enum.DirectoryEditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edition') }})
    short_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
