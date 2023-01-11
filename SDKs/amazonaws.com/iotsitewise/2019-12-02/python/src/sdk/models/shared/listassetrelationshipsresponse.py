import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetrelationshipsummary as shared_assetrelationshipsummary


@dataclass_json
@dataclasses.dataclass
class ListAssetRelationshipsResponse:
    asset_relationship_summaries: list[shared_assetrelationshipsummary.AssetRelationshipSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetRelationshipSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
