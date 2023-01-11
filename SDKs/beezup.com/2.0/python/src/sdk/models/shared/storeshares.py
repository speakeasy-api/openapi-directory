import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storeshareslinks as shared_storeshareslinks
from ..shared import storeshare as shared_storeshare


@dataclass_json
@dataclasses.dataclass
class StoreShares:
    links: shared_storeshareslinks.StoreSharesLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    shares: list[shared_storeshare.StoreShare] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shares') }})
    
