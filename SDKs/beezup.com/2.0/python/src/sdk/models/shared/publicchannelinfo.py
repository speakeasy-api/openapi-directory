import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PublicChannelInfo:
    home_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeUrl') }})
    logo_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    sectors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectors') }})
    
