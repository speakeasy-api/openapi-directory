import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorycatalogdata as shared_repositorycatalogdata
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class CreateRepositoryResponse:
    catalog_data: Optional[shared_repositorycatalogdata.RepositoryCatalogData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogData') }})
    repository: Optional[shared_repository.Repository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
