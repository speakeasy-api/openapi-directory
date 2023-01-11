import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputstartingpositionconfiguration as shared_inputstartingpositionconfiguration


@dataclass_json
@dataclasses.dataclass
class SQLRunConfiguration:
    r"""SQLRunConfiguration
    Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
    """
    
    input_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_starting_position_configuration: shared_inputstartingpositionconfiguration.InputStartingPositionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    
