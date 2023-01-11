import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitioncontainerdefinitionsdependsondetails as shared_awsecstaskdefinitioncontainerdefinitionsdependsondetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsenvironmentdetails as shared_awsecstaskdefinitioncontainerdefinitionsenvironmentdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails as shared_awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsextrahostsdetails as shared_awsecstaskdefinitioncontainerdefinitionsextrahostsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails as shared_awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionshealthcheckdetails as shared_awsecstaskdefinitioncontainerdefinitionshealthcheckdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails as shared_awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails as shared_awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsmountpointsdetails as shared_awsecstaskdefinitioncontainerdefinitionsmountpointsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsportmappingsdetails as shared_awsecstaskdefinitioncontainerdefinitionsportmappingsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails as shared_awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails as shared_awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionssecretsdetails as shared_awsecstaskdefinitioncontainerdefinitionssecretsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails as shared_awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsulimitsdetails as shared_awsecstaskdefinitioncontainerdefinitionsulimitsdetails
from ..shared import awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails as shared_awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsDetails
    A container definition that describes a container in the task.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    cpu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cpu') }})
    depends_on: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsdependsondetails.AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DependsOn') }})
    disable_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableNetworking') }})
    dns_search_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsSearchDomains') }})
    dns_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsServers') }})
    docker_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerLabels') }})
    docker_security_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerSecurityOptions') }})
    entry_point: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    environment: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsenvironmentdetails.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    environment_files: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentFiles') }})
    essential: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Essential') }})
    extra_hosts: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsextrahostsdetails.AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraHosts') }})
    firelens_configuration: Optional[shared_awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails.AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirelensConfiguration') }})
    health_check: Optional[shared_awsecstaskdefinitioncontainerdefinitionshealthcheckdetails.AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    interactive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interactive') }})
    links: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    linux_parameters: Optional[shared_awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinuxParameters') }})
    log_configuration: Optional[shared_awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails.AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogConfiguration') }})
    memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Memory') }})
    memory_reservation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryReservation') }})
    mount_points: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsmountpointsdetails.AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPoints') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    port_mappings: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsportmappingsdetails.AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortMappings') }})
    privileged: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Privileged') }})
    pseudo_terminal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PseudoTerminal') }})
    readonly_root_filesystem: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadonlyRootFilesystem') }})
    repository_credentials: Optional[shared_awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails.AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryCredentials') }})
    resource_requirements: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails.AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRequirements') }})
    secrets: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionssecretsdetails.AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Secrets') }})
    start_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeout') }})
    stop_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopTimeout') }})
    system_controls: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails.AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemControls') }})
    ulimits: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsulimitsdetails.AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ulimits') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    volumes_from: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails.AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumesFrom') }})
    working_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDirectory') }})
    
