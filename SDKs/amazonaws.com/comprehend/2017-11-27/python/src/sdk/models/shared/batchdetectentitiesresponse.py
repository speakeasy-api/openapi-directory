import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerror as shared_batchitemerror
from ..shared import batchdetectentitiesitemresult as shared_batchdetectentitiesitemresult


@dataclass_json
@dataclasses.dataclass
class BatchDetectEntitiesResponse:
    error_list: list[shared_batchitemerror.BatchItemError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorList') }})
    result_list: list[shared_batchdetectentitiesitemresult.BatchDetectEntitiesItemResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultList') }})
    
