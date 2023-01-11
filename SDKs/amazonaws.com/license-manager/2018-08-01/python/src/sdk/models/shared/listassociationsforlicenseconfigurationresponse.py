import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseconfigurationassociation as shared_licenseconfigurationassociation


@dataclass_json
@dataclasses.dataclass
class ListAssociationsForLicenseConfigurationResponse:
    license_configuration_associations: Optional[list[shared_licenseconfigurationassociation.LicenseConfigurationAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationAssociations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
