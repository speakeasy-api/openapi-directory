import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playmediacontrolactivity as shared_playmediacontrolactivity
from ..shared import playmediacontrolcommandset as shared_playmediacontrolcommandset
from ..shared import playmediacontrolscheme_enum as shared_playmediacontrolscheme_enum


@dataclass_json
@dataclasses.dataclass
class PlayMediaControl:
    activity: Optional[shared_playmediacontrolactivity.PlayMediaControlActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    commands: Optional[shared_playmediacontrolcommandset.PlayMediaControlCommandSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    scheme: Optional[shared_playmediacontrolscheme_enum.PlayMediaControlSchemeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
