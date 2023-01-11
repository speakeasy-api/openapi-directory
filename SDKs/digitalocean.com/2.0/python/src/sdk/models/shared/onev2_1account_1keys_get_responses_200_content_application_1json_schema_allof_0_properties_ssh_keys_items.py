import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSSHKeysItemsInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    
