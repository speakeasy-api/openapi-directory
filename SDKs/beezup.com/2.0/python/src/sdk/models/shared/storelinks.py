import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_deletestorelink as shared_links_deletestorelink
from ..shared import links_getstorelink as shared_links_getstorelink
from ..shared import links_sharestorelink as shared_links_sharestorelink
from ..shared import links_getstoreshareslink as shared_links_getstoreshareslink
from ..shared import links_updatestorelink as shared_links_updatestorelink


@dataclass_json
@dataclasses.dataclass
class StoreLinks:
    r"""StoreLinks
    The action links for this store
    """
    
    delete_store: Optional[shared_links_deletestorelink.LinksDeleteStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteStore') }})
    self: Optional[shared_links_getstorelink.LinksGetStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    share: Optional[shared_links_sharestorelink.LinksShareStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    shares: Optional[shared_links_getstoreshareslink.LinksGetStoreSharesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shares') }})
    update_store: Optional[shared_links_updatestorelink.LinksUpdateStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStore') }})
    
