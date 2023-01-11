import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildbatch as shared_buildbatch


@dataclass_json
@dataclasses.dataclass
class StartBuildBatchOutput:
    build_batch: Optional[shared_buildbatch.BuildBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatch') }})
    
