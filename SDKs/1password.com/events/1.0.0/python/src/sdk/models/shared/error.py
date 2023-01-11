import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ErrorError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class Error:
    error: Optional[ErrorError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
