import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associatedassetssummary as shared_associatedassetssummary


@dataclass_json
@dataclasses.dataclass
class ListAssociatedAssetsResponse:
    asset_summaries: list[shared_associatedassetssummary.AssociatedAssetsSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
