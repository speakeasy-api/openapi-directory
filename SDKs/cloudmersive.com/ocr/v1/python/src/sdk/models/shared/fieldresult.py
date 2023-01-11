import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrphototextelement as shared_ocrphototextelement
from ..shared import formfielddefinition as shared_formfielddefinition


@dataclass_json
@dataclasses.dataclass
class FieldResult:
    r"""FieldResult
    A pairing target field and actual value read from form
    """
    
    field_values: Optional[list[shared_ocrphototextelement.OcrPhotoTextElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldValues') }})
    target_field: Optional[shared_formfielddefinition.FormFieldDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetField') }})
    
