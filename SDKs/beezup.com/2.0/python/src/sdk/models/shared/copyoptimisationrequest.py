import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CopyOptimisationRequest:
    r"""CopyOptimisationRequest
    Copy the optimisation between 2 channels
    """
    
    channel_id_source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelIdSource') }})
    channel_id_target: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelIdTarget') }})
    keep_existing_optimisation: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepExistingOptimisation') }})
    
