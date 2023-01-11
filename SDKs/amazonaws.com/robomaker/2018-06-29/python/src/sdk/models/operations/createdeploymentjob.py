import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3object as shared_s3object
from ..shared import deploymentapplicationconfig as shared_deploymentapplicationconfig
from ..shared import createdeploymentjobresponse as shared_createdeploymentjobresponse


@dataclasses.dataclass
class CreateDeploymentJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentJobRequestBodyDeploymentConfig:
    r"""CreateDeploymentJobRequestBodyDeploymentConfig
    Information about a deployment configuration.
    """
    
    concurrent_deployment_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentDeploymentPercentage') }})
    download_condition_file: Optional[shared_s3object.S3Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadConditionFile') }})
    failure_threshold_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThresholdPercentage') }})
    robot_deployment_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotDeploymentTimeoutInSeconds') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentJobRequestBody:
    client_request_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    deployment_application_configs: list[shared_deploymentapplicationconfig.DeploymentApplicationConfig] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentApplicationConfigs') }})
    fleet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleet') }})
    deployment_config: Optional[CreateDeploymentJobRequestBodyDeploymentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfig') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateDeploymentJobRequest:
    headers: CreateDeploymentJobHeaders = dataclasses.field()
    request: CreateDeploymentJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_deployment_exception: Optional[Any] = dataclasses.field(default=None)
    create_deployment_job_response: Optional[shared_createdeploymentjobresponse.CreateDeploymentJobResponse] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
