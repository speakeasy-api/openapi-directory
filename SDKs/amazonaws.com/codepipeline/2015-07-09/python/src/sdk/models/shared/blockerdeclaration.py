import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blockertype_enum as shared_blockertype_enum


@dataclass_json
@dataclasses.dataclass
class BlockerDeclaration:
    r"""BlockerDeclaration
    Reserved for future use.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: shared_blockertype_enum.BlockerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
