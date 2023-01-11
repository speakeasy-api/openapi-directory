import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagecampaign as shared_inappmessagecampaign


@dataclass_json
@dataclasses.dataclass
class InAppMessagesResponse:
    r"""InAppMessagesResponse
    Get in-app messages response object.
    """
    
    in_app_message_campaigns: Optional[list[shared_inappmessagecampaign.InAppMessageCampaign]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessageCampaigns') }})
    
