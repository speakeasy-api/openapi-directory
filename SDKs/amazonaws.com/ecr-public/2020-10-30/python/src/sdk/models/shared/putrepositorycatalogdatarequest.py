import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorycatalogdatainput as shared_repositorycatalogdatainput


@dataclass_json
@dataclasses.dataclass
class PutRepositoryCatalogDataRequest:
    catalog_data: shared_repositorycatalogdatainput.RepositoryCatalogDataInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogData') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
