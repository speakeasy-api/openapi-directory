import dataclasses
from ..shared import documentsuggesteroptions as shared_documentsuggesteroptions


@dataclasses.dataclass
class Suggester:
    r"""Suggester
    Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. 
    """
    
    document_suggester_options: shared_documentsuggesteroptions.DocumentSuggesterOptions = dataclasses.field()
    suggester_name: str = dataclasses.field()
    
