import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelsummary as shared_assetmodelsummary


@dataclass_json
@dataclasses.dataclass
class ListAssetModelsResponse:
    asset_model_summaries: list[shared_assetmodelsummary.AssetModelSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
