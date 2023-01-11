import dataclasses
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DescribeIndexFieldsResponse:
    r"""DescribeIndexFieldsResponse
    A response message that contains the index fields for a search domain.
    """
    
    index_fields: list[shared_indexfieldstatus.IndexFieldStatus] = dataclasses.field()
    
