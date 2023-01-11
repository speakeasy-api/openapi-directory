import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awslambdafunctioncode as shared_awslambdafunctioncode
from ..shared import awslambdafunctiondeadletterconfig as shared_awslambdafunctiondeadletterconfig
from ..shared import awslambdafunctionenvironment as shared_awslambdafunctionenvironment
from ..shared import awslambdafunctionlayer as shared_awslambdafunctionlayer
from ..shared import awslambdafunctiontracingconfig as shared_awslambdafunctiontracingconfig
from ..shared import awslambdafunctionvpcconfig as shared_awslambdafunctionvpcconfig


@dataclass_json
@dataclasses.dataclass
class AwsLambdaFunctionDetails:
    r"""AwsLambdaFunctionDetails
    Details about a function's configuration.
    """
    
    code: Optional[shared_awslambdafunctioncode.AwsLambdaFunctionCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    code_sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSha256') }})
    dead_letter_config: Optional[shared_awslambdafunctiondeadletterconfig.AwsLambdaFunctionDeadLetterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    environment: Optional[shared_awslambdafunctionenvironment.AwsLambdaFunctionEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    function_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    handler: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    layers: Optional[list[shared_awslambdafunctionlayer.AwsLambdaFunctionLayer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    master_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterArn') }})
    memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    runtime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    tracing_config: Optional[shared_awslambdafunctiontracingconfig.AwsLambdaFunctionTracingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    vpc_config: Optional[shared_awslambdafunctionvpcconfig.AwsLambdaFunctionVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
