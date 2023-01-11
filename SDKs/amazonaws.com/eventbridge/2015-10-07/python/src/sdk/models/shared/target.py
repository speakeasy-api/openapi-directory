import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchparameters as shared_batchparameters
from ..shared import deadletterconfig as shared_deadletterconfig
from ..shared import ecsparameters as shared_ecsparameters
from ..shared import httpparameters as shared_httpparameters
from ..shared import inputtransformer as shared_inputtransformer
from ..shared import kinesisparameters as shared_kinesisparameters
from ..shared import redshiftdataparameters as shared_redshiftdataparameters
from ..shared import retrypolicy as shared_retrypolicy
from ..shared import runcommandparameters as shared_runcommandparameters
from ..shared import sagemakerpipelineparameters as shared_sagemakerpipelineparameters
from ..shared import sqsparameters as shared_sqsparameters


@dataclass_json
@dataclasses.dataclass
class Target:
    r"""Target
    <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href=\"https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html\">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html\">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    batch_parameters: Optional[shared_batchparameters.BatchParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchParameters') }})
    dead_letter_config: Optional[shared_deadletterconfig.DeadLetterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    ecs_parameters: Optional[shared_ecsparameters.EcsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsParameters') }})
    http_parameters: Optional[shared_httpparameters.HTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpParameters') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    input_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputPath') }})
    input_transformer: Optional[shared_inputtransformer.InputTransformer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputTransformer') }})
    kinesis_parameters: Optional[shared_kinesisparameters.KinesisParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisParameters') }})
    redshift_data_parameters: Optional[shared_redshiftdataparameters.RedshiftDataParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDataParameters') }})
    retry_policy: Optional[shared_retrypolicy.RetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryPolicy') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    run_command_parameters: Optional[shared_runcommandparameters.RunCommandParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunCommandParameters') }})
    sage_maker_pipeline_parameters: Optional[shared_sagemakerpipelineparameters.SageMakerPipelineParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerPipelineParameters') }})
    sqs_parameters: Optional[shared_sqsparameters.SqsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqsParameters') }})
    
