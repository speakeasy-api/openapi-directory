import dataclasses
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DeleteIndexFieldResponse:
    r"""DeleteIndexFieldResponse
    The result of a <code><a>DeleteIndexField</a></code> request.
    """
    
    index_field: shared_indexfieldstatus.IndexFieldStatus = dataclasses.field()
    
