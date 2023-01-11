import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientproperties as shared_clientproperties


@dataclass_json
@dataclasses.dataclass
class ModifyClientPropertiesRequest:
    client_properties: shared_clientproperties.ClientProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientProperties') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    
