import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createcanaryresponse as shared_createcanaryresponse


@dataclasses.dataclass
class CreateCanaryHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCanaryRequestBodyCode:
    r"""CreateCanaryRequestBodyCode
    Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
    """
    
    handler: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    s3_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Version') }})
    zip_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFile') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCanaryRequestBodyRunConfig:
    r"""CreateCanaryRequestBodyRunConfig
    A structure that contains input information for a canary run.
    """
    
    active_tracing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveTracing') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentVariables') }})
    memory_in_mb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryInMB') }})
    timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCanaryRequestBodySchedule:
    r"""CreateCanaryRequestBodySchedule
    This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
    """
    
    duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInSeconds') }})
    expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCanaryRequestBodyVpcConfig:
    r"""CreateCanaryRequestBodyVpcConfig
    If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html\"> Running a Canary in a VPC</a>.
    """
    
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCanaryRequestBody:
    artifact_s3_location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactS3Location') }})
    code: CreateCanaryRequestBodyCode = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    runtime_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeVersion') }})
    schedule: CreateCanaryRequestBodySchedule = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    failure_retention_period_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRetentionPeriodInDays') }})
    run_config: Optional[CreateCanaryRequestBodyRunConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfig') }})
    success_retention_period_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRetentionPeriodInDays') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_config: Optional[CreateCanaryRequestBodyVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    

@dataclasses.dataclass
class CreateCanaryRequest:
    headers: CreateCanaryHeaders = dataclasses.field()
    request: CreateCanaryRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCanaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_canary_response: Optional[shared_createcanaryresponse.CreateCanaryResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
