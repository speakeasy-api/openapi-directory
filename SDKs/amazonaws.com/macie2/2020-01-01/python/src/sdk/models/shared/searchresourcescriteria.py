import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchresourcessimplecriterion as shared_searchresourcessimplecriterion
from ..shared import searchresourcestagcriterion as shared_searchresourcestagcriterion


@dataclass_json
@dataclasses.dataclass
class SearchResourcesCriteria:
    r"""SearchResourcesCriteria
    Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
    """
    
    simple_criterion: Optional[shared_searchresourcessimplecriterion.SearchResourcesSimpleCriterion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleCriterion') }})
    tag_criterion: Optional[shared_searchresourcestagcriterion.SearchResourcesTagCriterion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagCriterion') }})
    
