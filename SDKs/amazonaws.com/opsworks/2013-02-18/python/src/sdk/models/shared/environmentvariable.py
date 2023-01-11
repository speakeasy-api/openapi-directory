import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnvironmentVariable:
    r"""EnvironmentVariable
    Represents an app's environment variable.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    secure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Secure') }})
    
