import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relatedobservations as shared_relatedobservations


@dataclass_json
@dataclasses.dataclass
class DescribeProblemObservationsResponse:
    related_observations: Optional[shared_relatedobservations.RelatedObservations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedObservations') }})
    
