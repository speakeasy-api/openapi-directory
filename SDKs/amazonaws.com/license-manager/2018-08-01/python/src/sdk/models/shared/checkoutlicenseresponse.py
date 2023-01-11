import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkouttype_enum as shared_checkouttype_enum
from ..shared import entitlementdata as shared_entitlementdata


@dataclass_json
@dataclasses.dataclass
class CheckoutLicenseResponse:
    checkout_type: Optional[shared_checkouttype_enum.CheckoutTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutType') }})
    entitlements_allowed: Optional[list[shared_entitlementdata.EntitlementData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementsAllowed') }})
    expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expiration') }})
    issued_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt') }})
    license_consumption_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConsumptionToken') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    signed_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignedToken') }})
    
