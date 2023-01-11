import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MapBeezUpColumnRequest:
    beez_up_column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnName') }})
    
