import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listrecommenderconfigurationsresponse as shared_listrecommenderconfigurationsresponse


@dataclass_json
@dataclasses.dataclass
class GetRecommenderConfigurationsResponse:
    list_recommender_configurations_response: shared_listrecommenderconfigurationsresponse.ListRecommenderConfigurationsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListRecommenderConfigurationsResponse') }})
    
