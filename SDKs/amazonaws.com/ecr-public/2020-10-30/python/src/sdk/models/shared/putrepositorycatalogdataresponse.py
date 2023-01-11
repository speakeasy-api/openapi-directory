import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorycatalogdata as shared_repositorycatalogdata


@dataclass_json
@dataclasses.dataclass
class PutRepositoryCatalogDataResponse:
    catalog_data: Optional[shared_repositorycatalogdata.RepositoryCatalogData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogData') }})
    
