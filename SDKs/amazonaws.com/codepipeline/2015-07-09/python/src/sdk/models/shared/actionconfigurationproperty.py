import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionconfigurationpropertytype_enum as shared_actionconfigurationpropertytype_enum


@dataclass_json
@dataclasses.dataclass
class ActionConfigurationProperty:
    r"""ActionConfigurationProperty
    Represents information about an action configuration property.
    """
    
    key: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    secret: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    queryable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryable') }})
    type: Optional[shared_actionconfigurationpropertytype_enum.ActionConfigurationPropertyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
