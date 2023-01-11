import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_createcontractlink as shared_links_createcontractlink


@dataclass_json
@dataclasses.dataclass
class OfferLinks:
    r"""OfferLinks
    The different actions you can make on this offer
    """
    
    create_contract: Optional[shared_links_createcontractlink.LinksCreateContractLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createContract') }})
    
