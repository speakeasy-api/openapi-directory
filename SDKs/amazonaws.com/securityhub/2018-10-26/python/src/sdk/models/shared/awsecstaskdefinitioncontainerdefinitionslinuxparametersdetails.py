import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails as shared_awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails as shared_awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails as shared_awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
    &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
    """
    
    capabilities: Optional[shared_awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capabilities') }})
    devices: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    init_process_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitProcessEnabled') }})
    max_swap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSwap') }})
    shared_memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedMemorySize') }})
    swappiness: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Swappiness') }})
    tmpfs: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tmpfs') }})
    
