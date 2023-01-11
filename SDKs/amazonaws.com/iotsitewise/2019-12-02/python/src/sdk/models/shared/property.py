import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertydatatype_enum as shared_propertydatatype_enum
from ..shared import propertynotification as shared_propertynotification
from ..shared import propertytype as shared_propertytype


@dataclass_json
@dataclasses.dataclass
class Property:
    r"""Property
    Contains asset property information.
    """
    
    data_type: shared_propertydatatype_enum.PropertyDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    notification: Optional[shared_propertynotification.PropertyNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    type: Optional[shared_propertytype.PropertyType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
