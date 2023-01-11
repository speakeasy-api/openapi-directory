import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldresult as shared_fieldresult
from ..shared import tableresult as shared_tableresult


@dataclass_json
@dataclasses.dataclass
class FormRecognitionResult:
    r"""FormRecognitionResult
    The result of extracting form field values
    """
    
    best_match_form_setting_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BestMatchFormSettingName') }})
    diagnostics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Diagnostics') }})
    field_value_extraction_result: Optional[list[shared_fieldresult.FieldResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldValueExtractionResult') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    table_value_extraction_results: Optional[list[shared_tableresult.TableResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableValueExtractionResults') }})
    
