import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPURLDestinationConfiguration:
    r"""HTTPURLDestinationConfiguration
    HTTP URL destination configuration used by the topic rule's HTTP action.
    """
    
    confirmation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationUrl') }})
    
