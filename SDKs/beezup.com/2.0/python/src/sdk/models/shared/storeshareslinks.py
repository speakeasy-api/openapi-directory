import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getstoreshareslink as shared_links_getstoreshareslink
from ..shared import links_sharestorelink as shared_links_sharestorelink


@dataclass_json
@dataclasses.dataclass
class StoreSharesLinks:
    self: Optional[shared_links_getstoreshareslink.LinksGetStoreSharesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    share: Optional[shared_links_sharestorelink.LinksShareStoreLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    
