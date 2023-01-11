import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketinfo as shared_bucketinfo
from ..shared import hits as shared_hits
from ..shared import fieldstats as shared_fieldstats
from ..shared import searchstatus as shared_searchstatus


@dataclass_json
@dataclasses.dataclass
class SearchResponse:
    r"""SearchResponse
    The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
    """
    
    facets: Optional[dict[str, shared_bucketinfo.BucketInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    hits: Optional[shared_hits.Hits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hits') }})
    stats: Optional[dict[str, shared_fieldstats.FieldStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: Optional[shared_searchstatus.SearchStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
