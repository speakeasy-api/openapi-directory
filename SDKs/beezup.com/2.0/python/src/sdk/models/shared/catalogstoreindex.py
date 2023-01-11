import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogstoreindexlinks as shared_catalogstoreindexlinks
from ..shared import catalogstorestatus_enum as shared_catalogstorestatus_enum


@dataclass_json
@dataclasses.dataclass
class CatalogStoreIndex:
    links: Optional[shared_catalogstoreindexlinks.CatalogStoreIndexLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    status: Optional[shared_catalogstorestatus_enum.CatalogStoreStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
