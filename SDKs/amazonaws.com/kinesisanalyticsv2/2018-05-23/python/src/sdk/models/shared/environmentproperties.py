import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertygroup as shared_propertygroup


@dataclass_json
@dataclasses.dataclass
class EnvironmentProperties:
    r"""EnvironmentProperties
    Describes execution properties for a Flink-based Kinesis Data Analytics application.
    """
    
    property_groups: list[shared_propertygroup.PropertyGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyGroups') }})
    
