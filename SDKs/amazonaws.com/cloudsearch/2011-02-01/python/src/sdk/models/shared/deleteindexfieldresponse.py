import dataclasses
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DeleteIndexFieldResponse:
    r"""DeleteIndexFieldResponse
    A response message that contains the status of a deleted index field.
    """
    
    index_field: shared_indexfieldstatus.IndexFieldStatus = dataclasses.field()
    
