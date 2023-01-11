import dataclasses
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DescribeIndexFieldsResponse:
    r"""DescribeIndexFieldsResponse
    The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
    """
    
    index_fields: list[shared_indexfieldstatus.IndexFieldStatus] = dataclasses.field()
    
