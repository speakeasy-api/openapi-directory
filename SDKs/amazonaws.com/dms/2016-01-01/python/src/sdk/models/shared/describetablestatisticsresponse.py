import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tablestatistics as shared_tablestatistics


@dataclass_json
@dataclasses.dataclass
class DescribeTableStatisticsResponse:
    r"""DescribeTableStatisticsResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    table_statistics: Optional[list[shared_tablestatistics.TableStatistics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatistics') }})
    
