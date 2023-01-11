import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactlanguage_enum as shared_contactlanguage_enum
from ..shared import mailtype_enum as shared_mailtype_enum
from ..shared import reviewdetails as shared_reviewdetails


@dataclass_json
@dataclasses.dataclass
class AccountDetails:
    r"""AccountDetails
    An object that contains information about your account details.
    """
    
    additional_contact_email_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalContactEmailAddresses') }})
    contact_language: Optional[shared_contactlanguage_enum.ContactLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLanguage') }})
    mail_type: Optional[shared_mailtype_enum.MailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailType') }})
    review_details: Optional[shared_reviewdetails.ReviewDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewDetails') }})
    use_case_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCaseDescription') }})
    website_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteURL') }})
    
