import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functioneventinvokeconfig as shared_functioneventinvokeconfig


@dataclass_json
@dataclasses.dataclass
class ListFunctionEventInvokeConfigsResponse:
    function_event_invoke_configs: Optional[list[shared_functioneventinvokeconfig.FunctionEventInvokeConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionEventInvokeConfigs') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
