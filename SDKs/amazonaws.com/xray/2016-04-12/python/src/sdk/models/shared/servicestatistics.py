import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorstatistics as shared_errorstatistics
from ..shared import faultstatistics as shared_faultstatistics


@dataclass_json
@dataclasses.dataclass
class ServiceStatistics:
    r"""ServiceStatistics
    Response statistics for a service.
    """
    
    error_statistics: Optional[shared_errorstatistics.ErrorStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorStatistics') }})
    fault_statistics: Optional[shared_faultstatistics.FaultStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultStatistics') }})
    ok_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OkCount') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    total_response_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResponseTime') }})
    
