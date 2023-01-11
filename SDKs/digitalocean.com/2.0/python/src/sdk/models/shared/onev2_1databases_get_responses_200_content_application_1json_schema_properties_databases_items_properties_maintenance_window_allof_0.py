import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0Input:
    day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    hour: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    
