import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import fargateplatformconfiguration as shared_fargateplatformconfiguration
from ..shared import linuxparameters as shared_linuxparameters
from ..shared import logconfiguration as shared_logconfiguration
from ..shared import mountpoint as shared_mountpoint
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import resourcerequirement as shared_resourcerequirement
from ..shared import secret as shared_secret
from ..shared import ulimit as shared_ulimit
from ..shared import volume as shared_volume
from ..shared import noderangeproperty as shared_noderangeproperty
from ..shared import evaluateonexit as shared_evaluateonexit
from ..shared import platformcapability_enum as shared_platformcapability_enum
from ..shared import registerjobdefinitionresponse as shared_registerjobdefinitionresponse


@dataclasses.dataclass
class RegisterJobDefinitionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionRequestBodyContainerProperties:
    r"""RegisterJobDefinitionRequestBodyContainerProperties
    Container properties are used in job definitions to describe the container that's launched as part of a job.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    fargate_platform_configuration: Optional[shared_fargateplatformconfiguration.FargatePlatformConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fargatePlatformConfiguration') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    job_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRoleArn') }})
    linux_parameters: Optional[shared_linuxparameters.LinuxParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[shared_logconfiguration.LogConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    memory: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    mount_points: Optional[list[shared_mountpoint.MountPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    privileged: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    readonly_root_filesystem: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    resource_requirements: Optional[list[shared_resourcerequirement.ResourceRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[list[shared_secret.Secret]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ulimits: Optional[list[shared_ulimit.Ulimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vcpus: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionRequestBodyNodeProperties:
    r"""RegisterJobDefinitionRequestBodyNodeProperties
    An object representing the node properties of a multi-node parallel job.
    """
    
    main_node: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainNode') }})
    node_range_properties: Optional[list[shared_noderangeproperty.NodeRangeProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRangeProperties') }})
    num_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionRequestBodyRetryStrategy:
    r"""RegisterJobDefinitionRequestBodyRetryStrategy
    The retry strategy associated with a job. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html\">Automated job retries</a> in the <i>Batch User Guide</i>.
    """
    
    attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    evaluate_on_exit: Optional[list[shared_evaluateonexit.EvaluateOnExit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateOnExit') }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionRequestBodyTimeout:
    r"""RegisterJobDefinitionRequestBodyTimeout
    An object representing a job timeout configuration.
    """
    
    attempt_duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDurationSeconds') }})
    
class RegisterJobDefinitionRequestBodyTypeEnum(str, Enum):
    CONTAINER = "container"
    MULTINODE = "multinode"


@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionRequestBody:
    job_definition_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionName') }})
    type: RegisterJobDefinitionRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    container_properties: Optional[RegisterJobDefinitionRequestBodyContainerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerProperties') }})
    node_properties: Optional[RegisterJobDefinitionRequestBodyNodeProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[list[shared_platformcapability_enum.PlatformCapabilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[RegisterJobDefinitionRequestBodyRetryStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[RegisterJobDefinitionRequestBodyTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclasses.dataclass
class RegisterJobDefinitionRequest:
    headers: RegisterJobDefinitionHeaders = dataclasses.field()
    request: RegisterJobDefinitionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterJobDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    register_job_definition_response: Optional[shared_registerjobdefinitionresponse.RegisterJobDefinitionResponse] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
