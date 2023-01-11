import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IotEventsInputIdentifier:
    r"""IotEventsInputIdentifier
     The identifier of the input routed to AWS IoT Events. 
    """
    
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    
