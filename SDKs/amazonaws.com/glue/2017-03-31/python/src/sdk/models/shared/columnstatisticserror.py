import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnstatistics as shared_columnstatistics
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class ColumnStatisticsError:
    r"""ColumnStatisticsError
    Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
    """
    
    column_statistics: Optional[shared_columnstatistics.ColumnStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatistics') }})
    error: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
