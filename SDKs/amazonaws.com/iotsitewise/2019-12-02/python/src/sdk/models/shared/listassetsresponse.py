import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetsummary as shared_assetsummary


@dataclass_json
@dataclasses.dataclass
class ListAssetsResponse:
    asset_summaries: list[shared_assetsummary.AssetSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
