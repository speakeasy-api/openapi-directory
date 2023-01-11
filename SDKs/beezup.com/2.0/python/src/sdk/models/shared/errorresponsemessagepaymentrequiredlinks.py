import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getofferlink as shared_links_getofferlink


@dataclass_json
@dataclasses.dataclass
class ErrorResponseMessagePaymentRequiredLinks:
    offer: shared_links_getofferlink.LinksGetOfferLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    
