import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apppkginfo_links as shared_apppkginfo_links
from ..shared import checksum as shared_checksum
from ..shared import onboardingstate_enum as shared_onboardingstate_enum
from ..shared import apppkg_operationalstate_enum as shared_apppkg_operationalstate_enum
from ..shared import usagestate_enum as shared_usagestate_enum


@dataclass_json
@dataclasses.dataclass
class AppPkgInfo:
    r"""AppPkgInfo
    'The data type AppPkgInfo represents the parameters for an application package resource'
    """
    
    links: shared_apppkginfo_links.AppPkgInfoLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_d_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDId') }})
    app_d_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDVersion') }})
    app_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appName') }})
    app_software_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSoftwareVersion') }})
    checksum: shared_checksum.Checksum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    onboarding_state: shared_onboardingstate_enum.OnboardingStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardingState') }})
    operational_state: shared_apppkg_operationalstate_enum.AppPkgOperationalStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationalState') }})
    software_images: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareImages') }})
    usage_state: shared_usagestate_enum.UsageStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageState') }})
    additional_artifacts: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalArtifacts') }})
    app_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProvider') }})
    user_defined_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedData') }})
    
