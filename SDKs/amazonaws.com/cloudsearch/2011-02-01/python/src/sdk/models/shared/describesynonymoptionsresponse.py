import dataclasses
from ..shared import synonymoptionsstatus as shared_synonymoptionsstatus


@dataclasses.dataclass
class DescribeSynonymOptionsResponse:
    r"""DescribeSynonymOptionsResponse
    A response message that contains the synonym options for a search domain.
    """
    
    synonyms: shared_synonymoptionsstatus.SynonymOptionsStatus = dataclasses.field()
    
