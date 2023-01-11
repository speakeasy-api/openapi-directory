import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dkimattributes as shared_dkimattributes
from ..shared import identitytype_enum as shared_identitytype_enum


@dataclass_json
@dataclasses.dataclass
class CreateEmailIdentityResponse:
    r"""CreateEmailIdentityResponse
    <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
    """
    
    dkim_attributes: Optional[shared_dkimattributes.DkimAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimAttributes') }})
    identity_type: Optional[shared_identitytype_enum.IdentityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    verified_for_sending_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedForSendingStatus') }})
    
