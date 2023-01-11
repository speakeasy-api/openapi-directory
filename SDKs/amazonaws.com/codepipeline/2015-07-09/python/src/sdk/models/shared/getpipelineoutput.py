import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinemetadata as shared_pipelinemetadata
from ..shared import pipelinedeclaration as shared_pipelinedeclaration


@dataclass_json
@dataclasses.dataclass
class GetPipelineOutput:
    r"""GetPipelineOutput
    Represents the output of a <code>GetPipeline</code> action.
    """
    
    metadata: Optional[shared_pipelinemetadata.PipelineMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pipeline: Optional[shared_pipelinedeclaration.PipelineDeclaration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    
