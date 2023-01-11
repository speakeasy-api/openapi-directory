import dataclasses
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DefineIndexFieldResponse:
    r"""DefineIndexFieldResponse
    The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
    """
    
    index_field: shared_indexfieldstatus.IndexFieldStatus = dataclasses.field()
    
