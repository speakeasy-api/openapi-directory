import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storelistlinks as shared_storelistlinks
from ..shared import store as shared_store


@dataclass_json
@dataclasses.dataclass
class StoreList:
    links: shared_storelistlinks.StoreListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    stores: list[shared_store.Store] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stores') }})
    
