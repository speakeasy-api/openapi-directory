import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JSONMappingParameters:
    r"""JSONMappingParameters
    Provides additional mapping information when JSON is the record format on the streaming source.
    """
    
    record_row_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordRowPath') }})
    
