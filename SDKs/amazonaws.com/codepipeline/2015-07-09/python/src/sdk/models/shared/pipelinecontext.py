import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncontext as shared_actioncontext
from ..shared import stagecontext as shared_stagecontext


@dataclass_json
@dataclasses.dataclass
class PipelineContext:
    r"""PipelineContext
    <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
    """
    
    action: Optional[shared_actioncontext.ActionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    pipeline_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineArn') }})
    pipeline_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    stage: Optional[shared_stagecontext.StageContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    
