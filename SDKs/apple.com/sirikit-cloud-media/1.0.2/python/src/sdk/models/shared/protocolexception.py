import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocolexceptionreason_enum as shared_protocolexceptionreason_enum


@dataclass_json
@dataclasses.dataclass
class ProtocolException:
    reason: shared_protocolexceptionreason_enum.ProtocolExceptionReasonEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    method_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodIndex') }})
    method_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    retry_with_delay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryWithDelay') }})
    trace: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trace') }})
    
