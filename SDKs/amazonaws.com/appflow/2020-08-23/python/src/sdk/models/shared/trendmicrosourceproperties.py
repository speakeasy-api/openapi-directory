import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrendmicroSourceProperties:
    r"""TrendmicroSourceProperties
     The properties that are applied when using Trend Micro as a flow source. 
    """
    
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
