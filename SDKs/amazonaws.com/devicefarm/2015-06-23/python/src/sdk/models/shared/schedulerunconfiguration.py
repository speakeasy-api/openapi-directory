import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingmethod_enum as shared_billingmethod_enum
from ..shared import customerartifactpaths as shared_customerartifactpaths
from ..shared import location as shared_location
from ..shared import radios as shared_radios


@dataclass_json
@dataclasses.dataclass
class ScheduleRunConfiguration:
    r"""ScheduleRunConfiguration
    Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
    """
    
    auxiliary_apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryApps') }})
    billing_method: Optional[shared_billingmethod_enum.BillingMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    customer_artifact_paths: Optional[shared_customerartifactpaths.CustomerArtifactPaths] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerArtifactPaths') }})
    extra_data_package_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraDataPackageArn') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network_profile_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfileArn') }})
    radios: Optional[shared_radios.Radios] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radios') }})
    vpce_configuration_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationArns') }})
    
