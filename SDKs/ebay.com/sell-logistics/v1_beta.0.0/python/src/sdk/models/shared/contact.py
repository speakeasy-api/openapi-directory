import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactaddress as shared_contactaddress
from ..shared import phonenumber as shared_phonenumber


@dataclass_json
@dataclasses.dataclass
class Contact:
    r"""Contact
    This complex type contains contact information for an individual buyer or seller.
    """
    
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    contact_address: Optional[shared_contactaddress.ContactAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactAddress') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    primary_phone: Optional[shared_phonenumber.PhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    
