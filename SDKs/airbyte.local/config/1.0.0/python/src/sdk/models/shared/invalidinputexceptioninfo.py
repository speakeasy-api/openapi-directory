import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invalidinputproperty as shared_invalidinputproperty


@dataclass_json
@dataclasses.dataclass
class InvalidInputExceptionInfo:
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    validation_errors: list[shared_invalidinputproperty.InvalidInputProperty] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    exception_class_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionClassName') }})
    exception_stack: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionStack') }})
    
