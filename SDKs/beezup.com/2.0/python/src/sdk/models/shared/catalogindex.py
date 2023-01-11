import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogindexlinks as shared_catalogindexlinks
from ..shared import catalogindexlovlinks as shared_catalogindexlovlinks
from ..shared import catalogstoreindexlist as shared_catalogstoreindexlist


@dataclass_json
@dataclasses.dataclass
class CatalogIndex:
    links: shared_catalogindexlinks.CatalogIndexLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    lov_links: shared_catalogindexlovlinks.CatalogIndexLovLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    store_links: Optional[shared_catalogstoreindexlist.CatalogStoreIndexList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeLinks') }})
    
