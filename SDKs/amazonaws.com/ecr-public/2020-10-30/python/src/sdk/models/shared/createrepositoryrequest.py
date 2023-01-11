import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorycatalogdatainput as shared_repositorycatalogdatainput
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateRepositoryRequest:
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    catalog_data: Optional[shared_repositorycatalogdatainput.RepositoryCatalogDataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogData') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
