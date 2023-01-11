import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directoryconnectsettings as shared_directoryconnectsettings
from ..shared import directorysize_enum as shared_directorysize_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ConnectDirectoryRequest:
    r"""ConnectDirectoryRequest
    Contains the inputs for the <a>ConnectDirectory</a> operation.
    """
    
    connect_settings: shared_directoryconnectsettings.DirectoryConnectSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectSettings') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    size: shared_directorysize_enum.DirectorySizeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    short_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
