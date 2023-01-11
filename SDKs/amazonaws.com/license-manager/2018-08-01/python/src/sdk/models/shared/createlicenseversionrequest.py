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
from ..shared import issuer as shared_issuer
from ..shared import metadata as shared_metadata
from ..shared import licensestatus_enum as shared_licensestatus_enum
from ..shared import datetimerange as shared_datetimerange


@dataclass_json
@dataclasses.dataclass
class CreateLicenseVersionRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    consumption_configuration: shared_consumptionconfiguration.ConsumptionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumptionConfiguration') }})
    entitlements: list[shared_entitlement.Entitlement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    home_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    issuer: shared_issuer.Issuer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    license_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    license_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseName') }})
    product_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    status: shared_licensestatus_enum.LicenseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    validity: shared_datetimerange.DatetimeRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    license_metadata: Optional[list[shared_metadata.Metadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseMetadata') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceVersion') }})
    
