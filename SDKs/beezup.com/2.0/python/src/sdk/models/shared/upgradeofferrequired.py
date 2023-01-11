import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpgradeOfferRequired:
    r"""UpgradeOfferRequired
    The message contains the offer identifier required to execute this operation
    """
    
    offer_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    
