import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functionality as shared_functionality
from ..shared import standardofferslinks as shared_standardofferslinks
from ..shared import standardoffer as shared_standardoffer


@dataclass_json
@dataclasses.dataclass
class StandardOffers:
    functionalities: list[shared_functionality.Functionality] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionalities') }})
    links: shared_standardofferslinks.StandardOffersLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    offers: list[shared_standardoffer.StandardOffer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    
