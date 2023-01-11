import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactrevision as shared_artifactrevision
from ..shared import pipelineexecutionstatus_enum as shared_pipelineexecutionstatus_enum


@dataclass_json
@dataclasses.dataclass
class PipelineExecution:
    r"""PipelineExecution
    Represents information about an execution of a pipeline.
    """
    
    artifact_revisions: Optional[list[shared_artifactrevision.ArtifactRevision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactRevisions') }})
    pipeline_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    pipeline_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineVersion') }})
    status: Optional[shared_pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusSummary') }})
    
