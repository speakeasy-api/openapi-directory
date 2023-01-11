import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AmplitudeSourceProperties:
    r"""AmplitudeSourceProperties
     The properties that are applied when Amplitude is being used as a source. 
    """
    
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
