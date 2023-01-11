import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FailedBatchItem:
    r"""FailedBatchItem
     A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
    """
    
    error_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
