import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelstatus as shared_assetmodelstatus


@dataclass_json
@dataclasses.dataclass
class CreateAssetModelResponse:
    asset_model_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelArn') }})
    asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_model_status: shared_assetmodelstatus.AssetModelStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelStatus') }})
    
