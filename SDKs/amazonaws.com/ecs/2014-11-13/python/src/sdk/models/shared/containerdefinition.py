import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerdependency as shared_containerdependency
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import environmentfile as shared_environmentfile
from ..shared import hostentry as shared_hostentry
from ..shared import firelensconfiguration as shared_firelensconfiguration
from ..shared import healthcheck as shared_healthcheck
from ..shared import linuxparameters as shared_linuxparameters
from ..shared import logconfiguration as shared_logconfiguration
from ..shared import mountpoint as shared_mountpoint
from ..shared import portmapping as shared_portmapping
from ..shared import repositorycredentials as shared_repositorycredentials
from ..shared import resourcerequirement as shared_resourcerequirement
from ..shared import secret as shared_secret
from ..shared import systemcontrol as shared_systemcontrol
from ..shared import ulimit as shared_ulimit
from ..shared import volumefrom as shared_volumefrom


@dataclass_json
@dataclasses.dataclass
class ContainerDefinition:
    r"""ContainerDefinition
    Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    cpu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    depends_on: Optional[list[shared_containerdependency.ContainerDependency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    disable_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNetworking') }})
    dns_search_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSearchDomains') }})
    dns_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsServers') }})
    docker_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerLabels') }})
    docker_security_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerSecurityOptions') }})
    entry_point: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_files: Optional[list[shared_environmentfile.EnvironmentFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentFiles') }})
    essential: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('essential') }})
    extra_hosts: Optional[list[shared_hostentry.HostEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraHosts') }})
    firelens_configuration: Optional[shared_firelensconfiguration.FirelensConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firelensConfiguration') }})
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    interactive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactive') }})
    links: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    linux_parameters: Optional[shared_linuxparameters.LinuxParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[shared_logconfiguration.LogConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    memory_reservation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReservation') }})
    mount_points: Optional[list[shared_mountpoint.MountPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_mappings: Optional[list[shared_portmapping.PortMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMappings') }})
    privileged: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    pseudo_terminal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pseudoTerminal') }})
    readonly_root_filesystem: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    repository_credentials: Optional[shared_repositorycredentials.RepositoryCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryCredentials') }})
    resource_requirements: Optional[list[shared_resourcerequirement.ResourceRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[list[shared_secret.Secret]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    start_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeout') }})
    stop_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimeout') }})
    system_controls: Optional[list[shared_systemcontrol.SystemControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemControls') }})
    ulimits: Optional[list[shared_ulimit.Ulimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    volumes_from: Optional[list[shared_volumefrom.VolumeFrom]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumesFrom') }})
    working_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    
