import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensespecification as shared_licensespecification


@dataclass_json
@dataclasses.dataclass
class UpdateLicenseSpecificationsForResourceRequest:
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    add_license_specifications: Optional[list[shared_licensespecification.LicenseSpecification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddLicenseSpecifications') }})
    remove_license_specifications: Optional[list[shared_licensespecification.LicenseSpecification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveLicenseSpecifications') }})
    
