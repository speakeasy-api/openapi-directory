import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionconfiguration as shared_actionconfiguration
from ..shared import actiontypeid as shared_actiontypeid
from ..shared import awssessioncredentials as shared_awssessioncredentials
from ..shared import encryptionkey as shared_encryptionkey
from ..shared import artifact as shared_artifact
from ..shared import pipelinecontext as shared_pipelinecontext


@dataclass_json
@dataclasses.dataclass
class JobData:
    r"""JobData
    Represents other information about a job required for a job worker to complete the job.
    """
    
    action_configuration: Optional[shared_actionconfiguration.ActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionConfiguration') }})
    action_type_id: Optional[shared_actiontypeid.ActionTypeID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    artifact_credentials: Optional[shared_awssessioncredentials.AwsSessionCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactCredentials') }})
    continuation_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    encryption_key: Optional[shared_encryptionkey.EncryptionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    input_artifacts: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    output_artifacts: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    pipeline_context: Optional[shared_pipelinecontext.PipelineContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineContext') }})
    
