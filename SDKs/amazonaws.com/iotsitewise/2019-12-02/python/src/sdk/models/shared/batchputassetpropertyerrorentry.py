import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchputassetpropertyerror as shared_batchputassetpropertyerror


@dataclass_json
@dataclasses.dataclass
class BatchPutAssetPropertyErrorEntry:
    r"""BatchPutAssetPropertyErrorEntry
    Contains error information for asset property value entries that are associated with the <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html\">BatchPutAssetPropertyValue</a> API.
    """
    
    entry_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    errors: list[shared_batchputassetpropertyerror.BatchPutAssetPropertyError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
