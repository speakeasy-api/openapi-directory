import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitionvolumesdockervolumeconfigurationdetails as shared_awsecstaskdefinitionvolumesdockervolumeconfigurationdetails
from ..shared import awsecstaskdefinitionvolumesefsvolumeconfigurationdetails as shared_awsecstaskdefinitionvolumesefsvolumeconfigurationdetails
from ..shared import awsecstaskdefinitionvolumeshostdetails as shared_awsecstaskdefinitionvolumeshostdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionVolumesDetails:
    r"""AwsEcsTaskDefinitionVolumesDetails
    A data volume to mount from another container.
    """
    
    docker_volume_configuration: Optional[shared_awsecstaskdefinitionvolumesdockervolumeconfigurationdetails.AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerVolumeConfiguration') }})
    efs_volume_configuration: Optional[shared_awsecstaskdefinitionvolumesefsvolumeconfigurationdetails.AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsVolumeConfiguration') }})
    host: Optional[shared_awsecstaskdefinitionvolumeshostdetails.AwsEcsTaskDefinitionVolumesHostDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Host') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
