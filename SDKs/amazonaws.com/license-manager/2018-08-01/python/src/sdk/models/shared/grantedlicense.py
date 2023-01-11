import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumptionconfiguration as shared_consumptionconfiguration
from ..shared import entitlement as shared_entitlement
from ..shared import issuerdetails as shared_issuerdetails
from ..shared import metadata as shared_metadata
from ..shared import receivedmetadata as shared_receivedmetadata
from ..shared import licensestatus_enum as shared_licensestatus_enum
from ..shared import datetimerange as shared_datetimerange


@dataclass_json
@dataclasses.dataclass
class GrantedLicense:
    r"""GrantedLicense
    Describes a license that is granted to a grantee.
    """
    
    beneficiary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    consumption_configuration: Optional[shared_consumptionconfiguration.ConsumptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumptionConfiguration') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime') }})
    entitlements: Optional[list[shared_entitlement.Entitlement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    home_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    issuer: Optional[shared_issuerdetails.IssuerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    license_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    license_metadata: Optional[list[shared_metadata.Metadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseMetadata') }})
    license_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseName') }})
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    product_sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSKU') }})
    received_metadata: Optional[shared_receivedmetadata.ReceivedMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedMetadata') }})
    status: Optional[shared_licensestatus_enum.LicenseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    validity: Optional[shared_datetimerange.DatetimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
