import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyzedresourcesummary as shared_analyzedresourcesummary


@dataclass_json
@dataclasses.dataclass
class ListAnalyzedResourcesResponse:
    r"""ListAnalyzedResourcesResponse
    The response to the request.
    """
    
    analyzed_resources: list[shared_analyzedresourcesummary.AnalyzedResourceSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzedResources') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
