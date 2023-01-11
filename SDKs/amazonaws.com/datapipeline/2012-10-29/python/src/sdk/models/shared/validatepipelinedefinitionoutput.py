import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationerror as shared_validationerror
from ..shared import validationwarning as shared_validationwarning


@dataclass_json
@dataclasses.dataclass
class ValidatePipelineDefinitionOutput:
    r"""ValidatePipelineDefinitionOutput
    Contains the output of ValidatePipelineDefinition.
    """
    
    errored: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errored') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    validation_warnings: Optional[list[shared_validationwarning.ValidationWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationWarnings') }})
    
