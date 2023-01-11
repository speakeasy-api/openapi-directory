import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PropertyGroup:
    r"""PropertyGroup
    Property key-value pairs passed into an application.
    """
    
    property_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyGroupId') }})
    property_map: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyMap') }})
    
