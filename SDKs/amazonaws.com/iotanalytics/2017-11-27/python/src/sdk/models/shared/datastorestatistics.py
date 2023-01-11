import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import estimatedresourcesize as shared_estimatedresourcesize


@dataclass_json
@dataclasses.dataclass
class DatastoreStatistics:
    r"""DatastoreStatistics
    Statistical information about the data store.
    """
    
    size: Optional[shared_estimatedresourcesize.EstimatedResourceSize] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
