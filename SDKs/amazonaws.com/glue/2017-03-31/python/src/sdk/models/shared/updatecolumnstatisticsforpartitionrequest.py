import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnstatistics as shared_columnstatistics


@dataclass_json
@dataclasses.dataclass
class UpdateColumnStatisticsForPartitionRequest:
    column_statistics_list: list[shared_columnstatistics.ColumnStatistics] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatisticsList') }})
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValues') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
