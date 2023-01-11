import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertygroup as shared_propertygroup


@dataclass_json
@dataclasses.dataclass
class EnvironmentPropertyDescriptions:
    r"""EnvironmentPropertyDescriptions
    Describes the execution properties for an Apache Flink runtime.
    """
    
    property_group_descriptions: Optional[list[shared_propertygroup.PropertyGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyGroupDescriptions') }})
    
