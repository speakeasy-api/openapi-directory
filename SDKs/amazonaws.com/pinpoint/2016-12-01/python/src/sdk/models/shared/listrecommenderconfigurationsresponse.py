import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommenderconfigurationresponse as shared_recommenderconfigurationresponse


@dataclass_json
@dataclasses.dataclass
class ListRecommenderConfigurationsResponse:
    r"""ListRecommenderConfigurationsResponse
    Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
    """
    
    item: list[shared_recommenderconfigurationresponse.RecommenderConfigurationResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
