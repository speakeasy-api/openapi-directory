import dataclasses
from ..shared import defaultsearchfieldstatus as shared_defaultsearchfieldstatus


@dataclasses.dataclass
class DescribeDefaultSearchFieldResponse:
    r"""DescribeDefaultSearchFieldResponse
    A response message that contains the default search field for a search domain.
    """
    
    default_search_field: shared_defaultsearchfieldstatus.DefaultSearchFieldStatus = dataclasses.field()
    
