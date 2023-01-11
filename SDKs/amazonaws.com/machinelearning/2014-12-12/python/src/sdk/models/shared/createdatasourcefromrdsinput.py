import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rdsdataspec as shared_rdsdataspec


@dataclass_json
@dataclasses.dataclass
class CreateDataSourceFromRdsInput:
    data_source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    rds_data: shared_rdsdataspec.RdsDataSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSData') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    compute_statistics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeStatistics') }})
    data_source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceName') }})
    
