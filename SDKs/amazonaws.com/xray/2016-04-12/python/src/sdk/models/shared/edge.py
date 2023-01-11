import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alias as shared_alias
from ..shared import histogramentry as shared_histogramentry
from ..shared import edgestatistics as shared_edgestatistics


@dataclass_json
@dataclasses.dataclass
class Edge:
    r"""Edge
    Information about a connection between two services.
    """
    
    aliases: Optional[list[shared_alias.Alias]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    response_time_histogram: Optional[list[shared_histogramentry.HistogramEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeHistogram') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary_statistics: Optional[shared_edgestatistics.EdgeStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryStatistics') }})
    
