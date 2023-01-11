import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource


@dataclass_json
@dataclasses.dataclass
class CreateDataSourceResponse:
    data_source: Optional[shared_datasource.DataSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    
