import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_createstorelink as shared_links_createstorelink
from ..shared import links_getstoreslink as shared_links_getstoreslink


@dataclass_json
@dataclasses.dataclass
class StoreListLinks:
    r"""StoreListLinks
    The action links you can do globally on stores
    """
    
    create_store: Optional[shared_links_createstorelink.LinksCreateStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createStore') }})
    self: Optional[shared_links_getstoreslink.LinksGetStoresLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
