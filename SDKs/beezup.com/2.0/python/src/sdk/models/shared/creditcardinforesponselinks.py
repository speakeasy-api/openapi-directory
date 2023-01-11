import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_savecreditcardinfolink as shared_links_savecreditcardinfolink
from ..shared import links_getcreditcardinfolink as shared_links_getcreditcardinfolink


@dataclass_json
@dataclasses.dataclass
class CreditCardInfoResponseLinks:
    r"""CreditCardInfoResponseLinks
    The different actions you can make on this offer
    """
    
    save_credit_card_info: shared_links_savecreditcardinfolink.LinksSaveCreditCardInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveCreditCardInfo') }})
    self: shared_links_getcreditcardinfolink.LinksGetCreditCardInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
