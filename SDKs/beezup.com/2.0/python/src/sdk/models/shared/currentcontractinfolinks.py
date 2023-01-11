import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_terminatecurrentcontractlink as shared_links_terminatecurrentcontractlink
from ..shared import links_reactivatecurrentcontractlink as shared_links_reactivatecurrentcontractlink


@dataclass_json
@dataclasses.dataclass
class CurrentContractInfoLinks:
    disable: Optional[shared_links_terminatecurrentcontractlink.LinksTerminateCurrentContractLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    reenable: Optional[shared_links_reactivatecurrentcontractlink.LinksReactivateCurrentContractLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reenable') }})
    
