import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitionerror as shared_partitionerror


@dataclass_json
@dataclasses.dataclass
class BatchCreatePartitionResponse:
    errors: Optional[list[shared_partitionerror.PartitionError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
