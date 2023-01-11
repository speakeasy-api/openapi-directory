import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkouttype_enum as shared_checkouttype_enum
from ..shared import entitlementdata as shared_entitlementdata


@dataclass_json
@dataclasses.dataclass
class CheckoutLicenseRequest:
    checkout_type: shared_checkouttype_enum.CheckoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutType') }})
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    entitlements: list[shared_entitlementdata.EntitlementData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    key_fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyFingerprint') }})
    product_sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSKU') }})
    beneficiary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    
