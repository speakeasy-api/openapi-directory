import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dkimattributes as shared_dkimattributes
from ..shared import identitytype_enum as shared_identitytype_enum
from ..shared import mailfromattributes as shared_mailfromattributes
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class GetEmailIdentityResponse:
    r"""GetEmailIdentityResponse
    Details about an email identity.
    """
    
    configuration_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    dkim_attributes: Optional[shared_dkimattributes.DkimAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimAttributes') }})
    feedback_forwarding_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingStatus') }})
    identity_type: Optional[shared_identitytype_enum.IdentityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    mail_from_attributes: Optional[shared_mailfromattributes.MailFromAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromAttributes') }})
    policies: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    verified_for_sending_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedForSendingStatus') }})
    
