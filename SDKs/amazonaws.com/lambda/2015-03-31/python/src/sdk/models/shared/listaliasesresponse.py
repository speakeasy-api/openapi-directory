import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aliasconfiguration as shared_aliasconfiguration


@dataclass_json
@dataclasses.dataclass
class ListAliasesResponse:
    aliases: Optional[list[shared_aliasconfiguration.AliasConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
