import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeysresponse as shared_journeysresponse


@dataclass_json
@dataclasses.dataclass
class ListJourneysResponse:
    journeys_response: shared_journeysresponse.JourneysResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneysResponse') }})
    
