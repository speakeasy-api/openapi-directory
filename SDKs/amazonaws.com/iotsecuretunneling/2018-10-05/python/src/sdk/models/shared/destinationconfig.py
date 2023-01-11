import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DestinationConfig:
    r"""DestinationConfig
    The destination configuration.
    """
    
    services: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
