import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchputassetpropertyvalueerrorcode_enum as shared_batchputassetpropertyvalueerrorcode_enum
from ..shared import timeinnanos as shared_timeinnanos


@dataclass_json
@dataclasses.dataclass
class BatchPutAssetPropertyError:
    r"""BatchPutAssetPropertyError
    Contains error information from updating a batch of asset property values.
    """
    
    error_code: shared_batchputassetpropertyvalueerrorcode_enum.BatchPutAssetPropertyValueErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    timestamps: list[shared_timeinnanos.TimeInNanos] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamps') }})
    
