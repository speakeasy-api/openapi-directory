import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeydaterangekpiresponse as shared_journeydaterangekpiresponse


@dataclass_json
@dataclasses.dataclass
class GetJourneyDateRangeKpiResponse:
    journey_date_range_kpi_response: shared_journeydaterangekpiresponse.JourneyDateRangeKpiResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyDateRangeKpiResponse') }})
    
