import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datalakesettings as shared_datalakesettings


@dataclass_json
@dataclasses.dataclass
class PutDataLakeSettingsRequest:
    data_lake_settings: shared_datalakesettings.DataLakeSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakeSettings') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
