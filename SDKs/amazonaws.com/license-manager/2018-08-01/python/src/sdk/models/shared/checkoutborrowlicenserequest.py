import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadata as shared_metadata
from ..shared import digitalsignaturemethod_enum as shared_digitalsignaturemethod_enum
from ..shared import entitlementdata as shared_entitlementdata


@dataclass_json
@dataclasses.dataclass
class CheckoutBorrowLicenseRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    digital_signature_method: shared_digitalsignaturemethod_enum.DigitalSignatureMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DigitalSignatureMethod') }})
    entitlements: list[shared_entitlementdata.EntitlementData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    license_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    checkout_metadata: Optional[list[shared_metadata.Metadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutMetadata') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    
