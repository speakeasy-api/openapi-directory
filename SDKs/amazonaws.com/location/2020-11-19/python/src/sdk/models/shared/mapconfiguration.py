import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MapConfiguration:
    r"""MapConfiguration
    Specifies the map tile style selected from an available provider.
    """
    
    style: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Style') }})
    
