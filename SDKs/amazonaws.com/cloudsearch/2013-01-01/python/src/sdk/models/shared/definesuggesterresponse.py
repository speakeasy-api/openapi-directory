import dataclasses
from ..shared import suggesterstatus as shared_suggesterstatus


@dataclasses.dataclass
class DefineSuggesterResponse:
    r"""DefineSuggesterResponse
    The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
    """
    
    suggester: shared_suggesterstatus.SuggesterStatus = dataclasses.field()
    
