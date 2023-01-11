import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConfigureAutoImportIntervalRequest:
    r"""ConfigureAutoImportIntervalRequest
    The message request to configure the auto import interval
    """
    
    interval: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    
