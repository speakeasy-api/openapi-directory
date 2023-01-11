import dataclasses
from typing import Optional


@dataclasses.dataclass
class IndexDocumentsResponse:
    r"""IndexDocumentsResponse
    The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
    """
    
    field_names: Optional[list[str]] = dataclasses.field(default=None)
    
