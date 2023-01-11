import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadata as shared_metadata
from ..shared import entitlementdata as shared_entitlementdata


@dataclass_json
@dataclasses.dataclass
class CheckoutBorrowLicenseResponse:
    checkout_metadata: Optional[list[shared_metadata.Metadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutMetadata') }})
    entitlements_allowed: Optional[list[shared_entitlementdata.EntitlementData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementsAllowed') }})
    expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expiration') }})
    issued_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt') }})
    license_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    license_consumption_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConsumptionToken') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    signed_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignedToken') }})
    
