import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementdescription as shared_placementdescription


@dataclass_json
@dataclasses.dataclass
class DescribePlacementResponse:
    placement: shared_placementdescription.PlacementDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    
