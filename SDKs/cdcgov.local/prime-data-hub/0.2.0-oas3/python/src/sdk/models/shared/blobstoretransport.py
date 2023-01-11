import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BlobStoreTransport:
    r"""BlobStoreTransport
    Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
    """
    
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    storage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageName') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
