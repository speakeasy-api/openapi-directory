import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnstatisticsdata as shared_columnstatisticsdata


@dataclass_json
@dataclasses.dataclass
class ColumnStatistics:
    r"""ColumnStatistics
    Represents the generated column-level statistics for a table or partition.
    """
    
    analyzed_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyzedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    column_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnType') }})
    statistics_data: shared_columnstatisticsdata.ColumnStatisticsData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatisticsData') }})
    
