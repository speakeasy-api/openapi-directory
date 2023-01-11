import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targettype_enum as shared_targettype_enum


@dataclass_json
@dataclasses.dataclass
class ShareTarget:
    r"""ShareTarget
    Identifier that contains details about the directory consumer account.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: shared_targettype_enum.TargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
