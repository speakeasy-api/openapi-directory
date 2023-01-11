import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basekpiresult as shared_basekpiresult


@dataclass_json
@dataclasses.dataclass
class JourneyDateRangeKpiResponse:
    r"""JourneyDateRangeKpiResponse
    Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    journey_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyId') }})
    kpi_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KpiName') }})
    kpi_result: shared_basekpiresult.BaseKpiResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KpiResult') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
