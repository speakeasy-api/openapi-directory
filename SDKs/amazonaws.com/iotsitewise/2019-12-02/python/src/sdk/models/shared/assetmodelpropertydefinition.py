import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertydatatype_enum as shared_propertydatatype_enum
from ..shared import propertytype as shared_propertytype


@dataclass_json
@dataclasses.dataclass
class AssetModelPropertyDefinition:
    r"""AssetModelPropertyDefinition
    Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
    """
    
    data_type: shared_propertydatatype_enum.PropertyDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: shared_propertytype.PropertyType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    data_type_spec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataTypeSpec') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
