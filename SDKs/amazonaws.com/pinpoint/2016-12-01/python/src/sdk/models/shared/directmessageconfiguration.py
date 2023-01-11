import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import admmessage as shared_admmessage
from ..shared import apnsmessage as shared_apnsmessage
from ..shared import baidumessage as shared_baidumessage
from ..shared import defaultmessage as shared_defaultmessage
from ..shared import defaultpushnotificationmessage as shared_defaultpushnotificationmessage
from ..shared import emailmessage as shared_emailmessage
from ..shared import gcmmessage as shared_gcmmessage
from ..shared import smsmessage as shared_smsmessage
from ..shared import voicemessage as shared_voicemessage


@dataclass_json
@dataclasses.dataclass
class DirectMessageConfiguration:
    r"""DirectMessageConfiguration
    Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
    """
    
    adm_message: Optional[shared_admmessage.AdmMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMMessage') }})
    apns_message: Optional[shared_apnsmessage.ApnsMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSMessage') }})
    baidu_message: Optional[shared_baidumessage.BaiduMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaiduMessage') }})
    default_message: Optional[shared_defaultmessage.DefaultMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultMessage') }})
    default_push_notification_message: Optional[shared_defaultpushnotificationmessage.DefaultPushNotificationMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultPushNotificationMessage') }})
    email_message: Optional[shared_emailmessage.EmailMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    gcm_message: Optional[shared_gcmmessage.GcmMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCMMessage') }})
    sms_message: Optional[shared_smsmessage.SmsMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMessage') }})
    voice_message: Optional[shared_voicemessage.VoiceMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceMessage') }})
    
