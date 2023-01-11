import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinedeclaration as shared_pipelinedeclaration


@dataclass_json
@dataclasses.dataclass
class UpdatePipelineInput:
    r"""UpdatePipelineInput
    Represents the input of an <code>UpdatePipeline</code> action.
    """
    
    pipeline: shared_pipelinedeclaration.PipelineDeclaration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    
