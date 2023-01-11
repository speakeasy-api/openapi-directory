import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import histogramentry as shared_histogramentry
from ..shared import edge as shared_edge
from ..shared import servicestatistics as shared_servicestatistics


@dataclass_json
@dataclasses.dataclass
class Service:
    r"""Service
    Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    duration_histogram: Optional[list[shared_histogramentry.HistogramEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationHistogram') }})
    edges: Optional[list[shared_edge.Edge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edges') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    reference_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    response_time_histogram: Optional[list[shared_histogramentry.HistogramEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeHistogram') }})
    root: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Root') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    summary_statistics: Optional[shared_servicestatistics.ServiceStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryStatistics') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
