import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardidentifier_enum as shared_standardidentifier_enum


@dataclass_json
@dataclasses.dataclass
class ObjectTypeKey:
    r"""ObjectTypeKey
    An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
    """
    
    field_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldNames') }})
    standard_identifiers: Optional[list[shared_standardidentifier_enum.StandardIdentifierEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardIdentifiers') }})
    
