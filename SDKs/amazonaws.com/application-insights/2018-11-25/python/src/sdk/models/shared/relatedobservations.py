import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import observation as shared_observation


@dataclass_json
@dataclasses.dataclass
class RelatedObservations:
    r"""RelatedObservations
    Describes observations related to the problem.
    """
    
    observation_list: Optional[list[shared_observation.Observation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObservationList') }})
    
