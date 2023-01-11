import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import moduleloggingconfigurationinput as shared_moduleloggingconfigurationinput
from ..shared import createenvironmentoutput as shared_createenvironmentoutput


@dataclasses.dataclass
class CreateEnvironmentPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBodyLoggingConfiguration:
    r"""CreateEnvironmentRequestBodyLoggingConfiguration
    Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
    """
    
    dag_processing_logs: Optional[shared_moduleloggingconfigurationinput.ModuleLoggingConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagProcessingLogs') }})
    scheduler_logs: Optional[shared_moduleloggingconfigurationinput.ModuleLoggingConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchedulerLogs') }})
    task_logs: Optional[shared_moduleloggingconfigurationinput.ModuleLoggingConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskLogs') }})
    webserver_logs: Optional[shared_moduleloggingconfigurationinput.ModuleLoggingConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverLogs') }})
    worker_logs: Optional[shared_moduleloggingconfigurationinput.ModuleLoggingConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerLogs') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBodyNetworkConfiguration:
    r"""CreateEnvironmentRequestBodyNetworkConfiguration
    The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href=\"https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html\">About networking on Amazon MWAA</a>.
    """
    
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    
class CreateEnvironmentRequestBodyWebserverAccessModeEnum(str, Enum):
    PRIVATE_ONLY = "PRIVATE_ONLY"
    PUBLIC_ONLY = "PUBLIC_ONLY"


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBody:
    dag_s3_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagS3Path') }})
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    network_configuration: CreateEnvironmentRequestBodyNetworkConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    source_bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBucketArn') }})
    airflow_configuration_options: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirflowConfigurationOptions') }})
    airflow_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirflowVersion') }})
    environment_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentClass') }})
    kms_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKey') }})
    logging_configuration: Optional[CreateEnvironmentRequestBodyLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingConfiguration') }})
    max_workers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWorkers') }})
    min_workers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinWorkers') }})
    plugins_s3_object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginsS3ObjectVersion') }})
    plugins_s3_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginsS3Path') }})
    requirements_s3_object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequirementsS3ObjectVersion') }})
    requirements_s3_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequirementsS3Path') }})
    schedulers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedulers') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    webserver_access_mode: Optional[CreateEnvironmentRequestBodyWebserverAccessModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverAccessMode') }})
    weekly_maintenance_window_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceWindowStart') }})
    

@dataclasses.dataclass
class CreateEnvironmentRequest:
    headers: CreateEnvironmentHeaders = dataclasses.field()
    path_params: CreateEnvironmentPathParams = dataclasses.field()
    request: CreateEnvironmentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_environment_output: Optional[shared_createenvironmentoutput.CreateEnvironmentOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
