import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message
from ..shared import campaigncustommessage as shared_campaigncustommessage
from ..shared import campaignemailmessage as shared_campaignemailmessage
from ..shared import campaigninappmessage as shared_campaigninappmessage
from ..shared import campaignsmsmessage as shared_campaignsmsmessage


@dataclass_json
@dataclasses.dataclass
class MessageConfiguration:
    r"""MessageConfiguration
    Specifies the message configuration settings for a campaign.
    """
    
    adm_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMMessage') }})
    apns_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSMessage') }})
    baidu_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaiduMessage') }})
    custom_message: Optional[shared_campaigncustommessage.CampaignCustomMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomMessage') }})
    default_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultMessage') }})
    email_message: Optional[shared_campaignemailmessage.CampaignEmailMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    gcm_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCMMessage') }})
    in_app_message: Optional[shared_campaigninappmessage.CampaignInAppMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessage') }})
    sms_message: Optional[shared_campaignsmsmessage.CampaignSmsMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMessage') }})
    
