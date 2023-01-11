import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnstatistics as shared_columnstatistics
from ..shared import columnerror as shared_columnerror


@dataclass_json
@dataclasses.dataclass
class GetColumnStatisticsForPartitionResponse:
    column_statistics_list: Optional[list[shared_columnstatistics.ColumnStatistics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatisticsList') }})
    errors: Optional[list[shared_columnerror.ColumnError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
