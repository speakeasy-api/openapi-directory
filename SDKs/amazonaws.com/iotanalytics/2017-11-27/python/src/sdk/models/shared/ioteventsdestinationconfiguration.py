import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IotEventsDestinationConfiguration:
    r"""IotEventsDestinationConfiguration
    Configuration information for delivery of dataset contents to IoT Events.
    """
    
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
