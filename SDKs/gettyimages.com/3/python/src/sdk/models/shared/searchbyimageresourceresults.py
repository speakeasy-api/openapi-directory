import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autocorrections as shared_autocorrections
from ..shared import searchfacetsresponse as shared_searchfacetsresponse
from ..shared import relatedsearch as shared_relatedsearch


@dataclass_json
@dataclasses.dataclass
class SearchByImageResourceResults:
    auto_corrections: Optional[shared_autocorrections.AutoCorrections] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    facets: Optional[shared_searchfacetsresponse.SearchFacetsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    image_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_fingerprint') }})
    images: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    related_searches: Optional[list[shared_relatedsearch.RelatedSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
