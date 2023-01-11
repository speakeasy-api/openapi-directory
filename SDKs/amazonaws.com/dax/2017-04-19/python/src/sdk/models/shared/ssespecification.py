import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SseSpecification:
    r"""SseSpecification
    Represents the settings used to enable server-side encryption.
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    
