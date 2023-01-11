import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationdaterangekpiresponse as shared_applicationdaterangekpiresponse


@dataclass_json
@dataclasses.dataclass
class GetApplicationDateRangeKpiResponse:
    application_date_range_kpi_response: shared_applicationdaterangekpiresponse.ApplicationDateRangeKpiResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDateRangeKpiResponse') }})
    
