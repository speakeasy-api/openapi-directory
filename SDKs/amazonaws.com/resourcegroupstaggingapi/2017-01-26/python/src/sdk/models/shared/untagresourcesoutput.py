import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failureinfo as shared_failureinfo


@dataclass_json
@dataclasses.dataclass
class UntagResourcesOutput:
    failed_resources_map: Optional[dict[str, shared_failureinfo.FailureInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedResourcesMap') }})
    
