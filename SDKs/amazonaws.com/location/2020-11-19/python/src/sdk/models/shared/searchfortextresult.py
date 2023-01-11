import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import place as shared_place


@dataclass_json
@dataclasses.dataclass
class SearchForTextResult:
    r"""SearchForTextResult
    Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
    """
    
    place: shared_place.Place = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Place') }})
    
