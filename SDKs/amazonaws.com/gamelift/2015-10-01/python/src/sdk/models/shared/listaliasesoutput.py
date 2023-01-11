import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alias as shared_alias


@dataclass_json
@dataclasses.dataclass
class ListAliasesOutput:
    r"""ListAliasesOutput
    Represents the returned data in response to a request operation.
    """
    
    aliases: Optional[list[shared_alias.Alias]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
