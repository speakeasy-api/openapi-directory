import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProfileCommerceAddress:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileCommerce:
    address: Optional[ProfileCommerceAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    bank_payment_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankPaymentReference') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileCompany:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tax_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxReference') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileCredits:
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    is_transfer_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTransferAllowed') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileOriginAddresses:
    allowed: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    is_full_control_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFullControlAllowed') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileQuota:
    remaining: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class Profile:
    created: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credits: ProfileCredits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    quota: ProfileQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    commerce: Optional[ProfileCommerce] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commerce') }})
    company: Optional[ProfileCompany] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    origin_addresses: Optional[ProfileOriginAddresses] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originAddresses') }})
    
