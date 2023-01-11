import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amidistributionconfiguration as shared_amidistributionconfiguration
from ..shared import containerdistributionconfiguration as shared_containerdistributionconfiguration
from ..shared import launchtemplateconfiguration as shared_launchtemplateconfiguration


@dataclass_json
@dataclasses.dataclass
class Distribution:
    r"""Distribution
     Defines the settings for a specific Region.
    """
    
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    ami_distribution_configuration: Optional[shared_amidistributionconfiguration.AmiDistributionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiDistributionConfiguration') }})
    container_distribution_configuration: Optional[shared_containerdistributionconfiguration.ContainerDistributionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDistributionConfiguration') }})
    launch_template_configurations: Optional[list[shared_launchtemplateconfiguration.LaunchTemplateConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplateConfigurations') }})
    license_configuration_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseConfigurationArns') }})
    
