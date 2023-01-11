import dataclasses
from ..shared import suggesterstatus as shared_suggesterstatus


@dataclasses.dataclass
class DescribeSuggestersResponse:
    r"""DescribeSuggestersResponse
    The result of a <code>DescribeSuggesters</code> request.
    """
    
    suggesters: list[shared_suggesterstatus.SuggesterStatus] = dataclasses.field()
    
