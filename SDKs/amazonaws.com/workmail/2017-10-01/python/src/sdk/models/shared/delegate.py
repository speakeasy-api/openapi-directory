import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membertype_enum as shared_membertype_enum


@dataclass_json
@dataclasses.dataclass
class Delegate:
    r"""Delegate
    The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: shared_membertype_enum.MemberTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
