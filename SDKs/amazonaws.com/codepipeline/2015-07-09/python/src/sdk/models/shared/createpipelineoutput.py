import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinedeclaration as shared_pipelinedeclaration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePipelineOutput:
    r"""CreatePipelineOutput
    Represents the output of a <code>CreatePipeline</code> action.
    """
    
    pipeline: Optional[shared_pipelinedeclaration.PipelineDeclaration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
