import dataclasses
from typing import Optional


@dataclasses.dataclass
class IndexDocumentsResponse:
    r"""IndexDocumentsResponse
    The result of an <code>IndexDocuments</code> action.
    """
    
    field_names: Optional[list[str]] = dataclasses.field(default=None)
    
