import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeyresponse as shared_journeyresponse


@dataclass_json
@dataclasses.dataclass
class UpdateJourneyResponse:
    journey_response: shared_journeyresponse.JourneyResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyResponse') }})
    
