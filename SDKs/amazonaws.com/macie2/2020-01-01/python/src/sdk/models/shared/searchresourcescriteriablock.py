import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchresourcescriteria as shared_searchresourcescriteria


@dataclass_json
@dataclasses.dataclass
class SearchResourcesCriteriaBlock:
    r"""SearchResourcesCriteriaBlock
    Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
    """
    
    and_: Optional[list[shared_searchresourcescriteria.SearchResourcesCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('and') }})
    
