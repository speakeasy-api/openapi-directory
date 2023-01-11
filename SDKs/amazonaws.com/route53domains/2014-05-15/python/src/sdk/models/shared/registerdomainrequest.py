import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactdetail as shared_contactdetail


@dataclass_json
@dataclasses.dataclass
class RegisterDomainRequest:
    r"""RegisterDomainRequest
    The RegisterDomain request includes the following elements.
    """
    
    admin_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminContact') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    duration_in_years: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInYears') }})
    registrant_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantContact') }})
    tech_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechContact') }})
    auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    idn_lang_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdnLangCode') }})
    privacy_protect_admin_contact: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectAdminContact') }})
    privacy_protect_registrant_contact: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectRegistrantContact') }})
    privacy_protect_tech_contact: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectTechContact') }})
    
