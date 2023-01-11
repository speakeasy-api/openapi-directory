import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommenderconfigurationresponse as shared_recommenderconfigurationresponse


@dataclass_json
@dataclasses.dataclass
class CreateRecommenderConfigurationResponse:
    recommender_configuration_response: shared_recommenderconfigurationresponse.RecommenderConfigurationResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommenderConfigurationResponse') }})
    
