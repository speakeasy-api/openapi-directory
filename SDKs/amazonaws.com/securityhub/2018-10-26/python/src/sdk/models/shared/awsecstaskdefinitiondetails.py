import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitioncontainerdefinitionsdetails as shared_awsecstaskdefinitioncontainerdefinitionsdetails
from ..shared import awsecstaskdefinitioninferenceacceleratorsdetails as shared_awsecstaskdefinitioninferenceacceleratorsdetails
from ..shared import awsecstaskdefinitionplacementconstraintsdetails as shared_awsecstaskdefinitionplacementconstraintsdetails
from ..shared import awsecstaskdefinitionproxyconfigurationdetails as shared_awsecstaskdefinitionproxyconfigurationdetails
from ..shared import awsecstaskdefinitionvolumesdetails as shared_awsecstaskdefinitionvolumesdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionDetails:
    r"""AwsEcsTaskDefinitionDetails
    details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
    """
    
    container_definitions: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsdetails.AwsEcsTaskDefinitionContainerDefinitionsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerDefinitions') }})
    cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cpu') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Family') }})
    inference_accelerators: Optional[list[shared_awsecstaskdefinitioninferenceacceleratorsdetails.AwsEcsTaskDefinitionInferenceAcceleratorsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceAccelerators') }})
    ipc_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpcMode') }})
    memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Memory') }})
    network_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkMode') }})
    pid_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PidMode') }})
    placement_constraints: Optional[list[shared_awsecstaskdefinitionplacementconstraintsdetails.AwsEcsTaskDefinitionPlacementConstraintsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    proxy_configuration: Optional[shared_awsecstaskdefinitionproxyconfigurationdetails.AwsEcsTaskDefinitionProxyConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProxyConfiguration') }})
    requires_compatibilities: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresCompatibilities') }})
    task_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRoleArn') }})
    volumes: Optional[list[shared_awsecstaskdefinitionvolumesdetails.AwsEcsTaskDefinitionVolumesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volumes') }})
    
