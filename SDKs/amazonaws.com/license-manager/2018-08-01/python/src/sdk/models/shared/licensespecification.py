import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LicenseSpecification:
    r"""LicenseSpecification
    Details for associating a license configuration with a resource.
    """
    
    license_configuration_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationArn') }})
    ami_association_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiAssociationScope') }})
    
