import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InternalServiceErrorException:
    r"""InternalServiceErrorException
    An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
