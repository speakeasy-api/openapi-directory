import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getcontractslink as shared_links_getcontractslink
from ..shared import links_createcontractlink as shared_links_createcontractlink


@dataclass_json
@dataclasses.dataclass
class CreateContractResponseLinks:
    contracts: Optional[shared_links_getcontractslink.LinksGetContractsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracts') }})
    self: Optional[shared_links_createcontractlink.LinksCreateContractLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
