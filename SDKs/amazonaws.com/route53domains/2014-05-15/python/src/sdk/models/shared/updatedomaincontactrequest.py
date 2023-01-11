import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactdetail as shared_contactdetail


@dataclass_json
@dataclasses.dataclass
class UpdateDomainContactRequest:
    r"""UpdateDomainContactRequest
    The UpdateDomainContact request includes the following elements.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    admin_contact: Optional[shared_contactdetail.ContactDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminContact') }})
    registrant_contact: Optional[shared_contactdetail.ContactDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantContact') }})
    tech_contact: Optional[shared_contactdetail.ContactDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechContact') }})
    
