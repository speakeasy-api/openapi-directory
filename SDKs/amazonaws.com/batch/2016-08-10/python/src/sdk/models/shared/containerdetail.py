import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import fargateplatformconfiguration as shared_fargateplatformconfiguration
from ..shared import linuxparameters as shared_linuxparameters
from ..shared import logconfiguration as shared_logconfiguration
from ..shared import mountpoint as shared_mountpoint
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import networkinterface as shared_networkinterface
from ..shared import resourcerequirement as shared_resourcerequirement
from ..shared import secret as shared_secret
from ..shared import ulimit as shared_ulimit
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class ContainerDetail:
    r"""ContainerDetail
    An object representing the details of a container that's part of a job.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    container_instance_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstanceArn') }})
    environment: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    exit_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    fargate_platform_configuration: Optional[shared_fargateplatformconfiguration.FargatePlatformConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fargatePlatformConfiguration') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    job_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRoleArn') }})
    linux_parameters: Optional[shared_linuxparameters.LinuxParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[shared_logconfiguration.LogConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    log_stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    mount_points: Optional[list[shared_mountpoint.MountPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    privileged: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    readonly_root_filesystem: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    resource_requirements: Optional[list[shared_resourcerequirement.ResourceRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[list[shared_secret.Secret]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    task_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    ulimits: Optional[list[shared_ulimit.Ulimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vcpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
