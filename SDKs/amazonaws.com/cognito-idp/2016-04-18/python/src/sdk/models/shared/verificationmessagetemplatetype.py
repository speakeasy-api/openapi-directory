import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultemailoptiontype_enum as shared_defaultemailoptiontype_enum


@dataclass_json
@dataclasses.dataclass
class VerificationMessageTemplateType:
    r"""VerificationMessageTemplateType
    The template for verification messages.
    """
    
    default_email_option: Optional[shared_defaultemailoptiontype_enum.DefaultEmailOptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultEmailOption') }})
    email_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_message_by_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessageByLink') }})
    email_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    email_subject_by_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubjectByLink') }})
    sms_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    
