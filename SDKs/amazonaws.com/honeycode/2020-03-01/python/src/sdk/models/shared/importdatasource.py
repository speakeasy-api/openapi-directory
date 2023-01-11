import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importdatasourceconfig as shared_importdatasourceconfig


@dataclass_json
@dataclasses.dataclass
class ImportDataSource:
    r"""ImportDataSource
    An object that has details about the source of the data that was submitted for import.
    """
    
    data_source_config: shared_importdatasourceconfig.ImportDataSourceConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceConfig') }})
    
