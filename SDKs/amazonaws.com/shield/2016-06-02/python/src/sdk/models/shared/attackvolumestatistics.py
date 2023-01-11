import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttackVolumeStatistics:
    r"""AttackVolumeStatistics
    Statistics objects for the various data types in <a>AttackVolume</a>. 
    """
    
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max') }})
    
