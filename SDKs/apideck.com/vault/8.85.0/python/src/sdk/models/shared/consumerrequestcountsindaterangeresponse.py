import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requestcountallocation as shared_requestcountallocation


@dataclass_json
@dataclasses.dataclass
class ConsumerRequestCountsInDateRangeResponseData:
    aggregated_request_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregated_request_count') }})
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    consumer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    end_datetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_datetime') }})
    request_counts: Optional[shared_requestcountallocation.RequestCountAllocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_counts') }})
    start_datetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_datetime') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsumerRequestCountsInDateRangeResponse:
    data: ConsumerRequestCountsInDateRangeResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
