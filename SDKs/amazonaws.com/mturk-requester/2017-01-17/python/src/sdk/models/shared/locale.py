import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Locale:
    r"""Locale
    The Locale data structure represents a geographical region or location.
    """
    
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    subdivision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdivision') }})
    
