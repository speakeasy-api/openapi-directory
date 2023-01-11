import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directoryconfig as shared_directoryconfig


@dataclass_json
@dataclasses.dataclass
class UpdateDirectoryConfigResult:
    directory_config: Optional[shared_directoryconfig.DirectoryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryConfig') }})
    
