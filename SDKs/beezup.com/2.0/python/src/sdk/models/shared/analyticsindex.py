import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsindexlinks as shared_analyticsindexlinks
from ..shared import analyticsindexlovlinks as shared_analyticsindexlovlinks
from ..shared import analyticsstoreindex as shared_analyticsstoreindex


@dataclass_json
@dataclasses.dataclass
class AnalyticsIndex:
    r"""AnalyticsIndex
    The Analytics API operation index.
    """
    
    links: shared_analyticsindexlinks.AnalyticsIndexLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    stores: list[shared_analyticsstoreindex.AnalyticsStoreIndex] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stores') }})
    lov_links: Optional[shared_analyticsindexlovlinks.AnalyticsIndexLovLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    
