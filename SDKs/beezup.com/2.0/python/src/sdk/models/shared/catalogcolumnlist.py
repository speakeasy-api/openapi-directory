import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogcolumn as shared_catalogcolumn


@dataclass_json
@dataclasses.dataclass
class CatalogColumnList:
    catalog_columns: list[shared_catalogcolumn.CatalogColumn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumns') }})
    
