import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3dataspec as shared_s3dataspec


@dataclass_json
@dataclasses.dataclass
class CreateDataSourceFromS3Input:
    data_source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    data_spec: shared_s3dataspec.S3DataSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSpec') }})
    compute_statistics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeStatistics') }})
    data_source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceName') }})
    
