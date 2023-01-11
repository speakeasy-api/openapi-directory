import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_savestorealertslink as shared_links_savestorealertslink


@dataclass_json
@dataclasses.dataclass
class StoreAlertLinks:
    r"""StoreAlertLinks
    The different actions you can make on this alert
    """
    
    save: Optional[shared_links_savestorealertslink.LinksSaveStoreAlertsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    
