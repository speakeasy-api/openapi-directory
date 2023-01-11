import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import edgestatistics as shared_edgestatistics
from ..shared import histogramentry as shared_histogramentry
from ..shared import forecaststatistics as shared_forecaststatistics
from ..shared import servicestatistics as shared_servicestatistics


@dataclass_json
@dataclasses.dataclass
class TimeSeriesServiceStatistics:
    r"""TimeSeriesServiceStatistics
    A list of TimeSeriesStatistic structures.
    """
    
    edge_summary_statistics: Optional[shared_edgestatistics.EdgeStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgeSummaryStatistics') }})
    response_time_histogram: Optional[list[shared_histogramentry.HistogramEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeHistogram') }})
    service_forecast_statistics: Optional[shared_forecaststatistics.ForecastStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceForecastStatistics') }})
    service_summary_statistics: Optional[shared_servicestatistics.ServiceStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceSummaryStatistics') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
