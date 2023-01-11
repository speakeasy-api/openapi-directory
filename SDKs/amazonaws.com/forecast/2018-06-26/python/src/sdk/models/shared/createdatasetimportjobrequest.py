import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDatasetImportJobRequest:
    data_source: shared_datasource.DataSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    dataset_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArn') }})
    dataset_import_job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetImportJobName') }})
    geolocation_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeolocationFormat') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZone') }})
    timestamp_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampFormat') }})
    use_geolocation_for_time_zone: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseGeolocationForTimeZone') }})
    
