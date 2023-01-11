import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import continent as shared_continent


@dataclass_json
@dataclasses.dataclass
class ContinentList:
    r"""ContinentList
    Continents List
    """
    
    continents: list[shared_continent.Continent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continents') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
