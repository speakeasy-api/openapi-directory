import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildbatch as shared_buildbatch


@dataclass_json
@dataclasses.dataclass
class BatchGetBuildBatchesOutput:
    build_batches: Optional[list[shared_buildbatch.BuildBatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatches') }})
    build_batches_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchesNotFound') }})
    
