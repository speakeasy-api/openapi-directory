import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationoutput as shared_validationoutput


@dataclass_json
@dataclasses.dataclass
class GetAppValidationOutputResponse:
    validation_output_list: Optional[list[shared_validationoutput.ValidationOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationOutputList') }})
    
