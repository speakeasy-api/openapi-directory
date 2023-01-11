import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
