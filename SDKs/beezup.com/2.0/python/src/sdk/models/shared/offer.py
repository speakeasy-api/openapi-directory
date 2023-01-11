import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offercontent as shared_offercontent
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import offerlinks as shared_offerlinks


@dataclass_json
@dataclasses.dataclass
class Offer:
    content: Optional[shared_offercontent.OfferContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    links: Optional[shared_offerlinks.OfferLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
