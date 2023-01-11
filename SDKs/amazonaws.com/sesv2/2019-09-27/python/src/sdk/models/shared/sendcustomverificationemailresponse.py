import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendCustomVerificationEmailResponse:
    r"""SendCustomVerificationEmailResponse
    The following element is returned by the service.
    """
    
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    
