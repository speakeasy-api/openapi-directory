import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autocorrections as shared_autocorrections
from ..shared import affiliateimage as shared_affiliateimage


@dataclass_json
@dataclasses.dataclass
class AffiliateImageSearchResponse:
    auto_corrections: Optional[shared_autocorrections.AutoCorrections] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    images: Optional[list[shared_affiliateimage.AffiliateImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    
