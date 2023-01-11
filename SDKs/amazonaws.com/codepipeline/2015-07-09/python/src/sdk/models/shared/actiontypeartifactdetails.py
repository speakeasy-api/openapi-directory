import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionTypeArtifactDetails:
    r"""ActionTypeArtifactDetails
    Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
    """
    
    maximum_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCount') }})
    minimum_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCount') }})
    
