import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeversion as shared_runtimeversion


@dataclass_json
@dataclasses.dataclass
class DescribeRuntimeVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    runtime_versions: Optional[list[shared_runtimeversion.RuntimeVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeVersions') }})
    
