import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functioncodelocation as shared_functioncodelocation
from ..shared import concurrency as shared_concurrency
from ..shared import functionconfiguration as shared_functionconfiguration


@dataclass_json
@dataclasses.dataclass
class GetFunctionResponse:
    code: Optional[shared_functioncodelocation.FunctionCodeLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    concurrency: Optional[shared_concurrency.Concurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Concurrency') }})
    configuration: Optional[shared_functionconfiguration.FunctionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
