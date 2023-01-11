import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ErrorInfo:
    r"""ErrorInfo
     Provides details in the event of a failed flow, including the failure count and the related error messages. 
    """
    
    execution_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionMessage') }})
    put_failures_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('putFailuresCount') }})
    
