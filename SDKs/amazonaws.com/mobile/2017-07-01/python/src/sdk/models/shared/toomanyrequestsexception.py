import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TooManyRequestsException:
    r"""TooManyRequestsException
     Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. 
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
