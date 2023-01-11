import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetstatus as shared_assetstatus


@dataclass_json
@dataclasses.dataclass
class DeleteAssetResponse:
    asset_status: shared_assetstatus.AssetStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    
