import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema:
    sql_mode: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql_mode') }})
    
