import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentcomponentupdatepolicy as shared_deploymentcomponentupdatepolicy
from ..shared import deploymentconfigurationvalidationpolicy as shared_deploymentconfigurationvalidationpolicy
from ..shared import deploymentfailurehandlingpolicy_enum as shared_deploymentfailurehandlingpolicy_enum
from ..shared import iotjobabortconfig as shared_iotjobabortconfig
from ..shared import iotjobexecutionsrolloutconfig as shared_iotjobexecutionsrolloutconfig
from ..shared import iotjobtimeoutconfig as shared_iotjobtimeoutconfig
from ..shared import componentdeploymentspecification as shared_componentdeploymentspecification
from ..shared import createdeploymentresponse as shared_createdeploymentresponse


@dataclasses.dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentRequestBodyDeploymentPolicies:
    r"""CreateDeploymentRequestBodyDeploymentPolicies
    Contains information about policies that define how a deployment updates components and handles failure.
    """
    
    component_update_policy: Optional[shared_deploymentcomponentupdatepolicy.DeploymentComponentUpdatePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentUpdatePolicy') }})
    configuration_validation_policy: Optional[shared_deploymentconfigurationvalidationpolicy.DeploymentConfigurationValidationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationValidationPolicy') }})
    failure_handling_policy: Optional[shared_deploymentfailurehandlingpolicy_enum.DeploymentFailureHandlingPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureHandlingPolicy') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentRequestBodyIotJobConfiguration:
    r"""CreateDeploymentRequestBodyIotJobConfiguration
    Contains information about an IoT job configuration.
    """
    
    abort_config: Optional[shared_iotjobabortconfig.IoTJobAbortConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    job_executions_rollout_config: Optional[shared_iotjobexecutionsrolloutconfig.IoTJobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    timeout_config: Optional[shared_iotjobtimeoutconfig.IoTJobTimeoutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentRequestBody:
    target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    components: Optional[dict[str, shared_componentdeploymentspecification.ComponentDeploymentSpecification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    deployment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentName') }})
    deployment_policies: Optional[CreateDeploymentRequestBodyDeploymentPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentPolicies') }})
    iot_job_configuration: Optional[CreateDeploymentRequestBodyIotJobConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobConfiguration') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = dataclasses.field()
    request: CreateDeploymentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_deployment_response: Optional[shared_createdeploymentresponse.CreateDeploymentResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    request_already_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
