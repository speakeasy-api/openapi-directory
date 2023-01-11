import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_deletestoresharelink as shared_links_deletestoresharelink


@dataclass_json
@dataclasses.dataclass
class StoreShareLinks:
    r"""StoreShareLinks
    The different actions you can make on this store share
    """
    
    delete_share: Optional[shared_links_deletestoresharelink.LinksDeleteStoreShareLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteShare') }})
    
