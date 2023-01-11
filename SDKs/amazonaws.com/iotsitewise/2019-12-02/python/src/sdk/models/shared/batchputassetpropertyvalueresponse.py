import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchputassetpropertyerrorentry as shared_batchputassetpropertyerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchPutAssetPropertyValueResponse:
    error_entries: list[shared_batchputassetpropertyerrorentry.BatchPutAssetPropertyErrorEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEntries') }})
    
