import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import communication as shared_communication


@dataclass_json
@dataclasses.dataclass
class DescribeCommunicationsResponse:
    r"""DescribeCommunicationsResponse
    The communications returned by the <a>DescribeCommunications</a> operation.
    """
    
    communications: Optional[list[shared_communication.Communication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communications') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
