import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_deletenextcontractlink as shared_links_deletenextcontractlink


@dataclass_json
@dataclasses.dataclass
class NextContractInfoLinks:
    delete: Optional[shared_links_deletenextcontractlink.LinksDeleteNextContractLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
