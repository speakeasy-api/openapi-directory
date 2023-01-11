import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetBlobInput:
    r"""GetBlobInput
    Represents the input of a get blob operation.
    """
    
    blob_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
