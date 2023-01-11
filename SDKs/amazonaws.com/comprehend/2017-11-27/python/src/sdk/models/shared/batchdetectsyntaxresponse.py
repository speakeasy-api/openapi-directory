import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerror as shared_batchitemerror
from ..shared import batchdetectsyntaxitemresult as shared_batchdetectsyntaxitemresult


@dataclass_json
@dataclasses.dataclass
class BatchDetectSyntaxResponse:
    error_list: list[shared_batchitemerror.BatchItemError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorList') }})
    result_list: list[shared_batchdetectsyntaxitemresult.BatchDetectSyntaxItemResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultList') }})
    
