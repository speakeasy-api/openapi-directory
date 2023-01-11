import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchfacetsresponse as shared_searchfacetsresponse
from ..shared import relatedsearch as shared_relatedsearch
from ..shared import editorialvideosearchitem as shared_editorialvideosearchitem


@dataclass_json
@dataclasses.dataclass
class EditorialVideoSearchResults:
    facets: Optional[shared_searchfacetsresponse.SearchFacetsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    related_searches: Optional[list[shared_relatedsearch.RelatedSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    videos: Optional[list[shared_editorialvideosearchitem.EditorialVideoSearchItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
