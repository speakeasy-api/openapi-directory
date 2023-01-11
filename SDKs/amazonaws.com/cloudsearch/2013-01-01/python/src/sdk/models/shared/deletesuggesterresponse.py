import dataclasses
from ..shared import suggesterstatus as shared_suggesterstatus


@dataclasses.dataclass
class DeleteSuggesterResponse:
    r"""DeleteSuggesterResponse
    The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
    """
    
    suggester: shared_suggesterstatus.SuggesterStatus = dataclasses.field()
    
