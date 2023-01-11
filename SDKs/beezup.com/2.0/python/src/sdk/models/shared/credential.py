import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Credential:
    r"""Credential
    Provides the credentials
    """
    
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
