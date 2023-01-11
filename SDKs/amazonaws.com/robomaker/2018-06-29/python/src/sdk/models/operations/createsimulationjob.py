import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourceconfig as shared_datasourceconfig
from ..shared import robotapplicationconfig as shared_robotapplicationconfig
from ..shared import simulationapplicationconfig as shared_simulationapplicationconfig
from ..shared import createsimulationjobresponse as shared_createsimulationjobresponse


@dataclasses.dataclass
class CreateSimulationJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationJobRequestBodyCompute:
    r"""CreateSimulationJobRequestBodyCompute
    Compute information for the simulation job.
    """
    
    simulation_unit_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationUnitLimit') }})
    
class CreateSimulationJobRequestBodyFailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"


@dataclass_json
@dataclasses.dataclass
class CreateSimulationJobRequestBodyLoggingConfig:
    r"""CreateSimulationJobRequestBodyLoggingConfig
    The logging configuration.
    """
    
    record_all_ros_topics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordAllRosTopics') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationJobRequestBodyOutputLocation:
    r"""CreateSimulationJobRequestBodyOutputLocation
    The output location.
    """
    
    s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Prefix') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationJobRequestBodyVpcConfig:
    r"""CreateSimulationJobRequestBodyVpcConfig
    If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
    """
    
    assign_public_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationJobRequestBody:
    iam_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    max_job_duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    compute: Optional[CreateSimulationJobRequestBodyCompute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[list[shared_datasourceconfig.DataSourceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[CreateSimulationJobRequestBodyFailureBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    logging_config: Optional[CreateSimulationJobRequestBodyLoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    output_location: Optional[CreateSimulationJobRequestBodyOutputLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[list[shared_robotapplicationconfig.RobotApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[list[shared_simulationapplicationconfig.SimulationApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vpc_config: Optional[CreateSimulationJobRequestBodyVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    

@dataclasses.dataclass
class CreateSimulationJobRequest:
    headers: CreateSimulationJobHeaders = dataclasses.field()
    request: CreateSimulationJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSimulationJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_simulation_job_response: Optional[shared_createsimulationjobresponse.CreateSimulationJobResponse] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
