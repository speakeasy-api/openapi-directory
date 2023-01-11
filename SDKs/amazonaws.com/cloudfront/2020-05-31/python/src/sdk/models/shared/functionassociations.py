import dataclasses
from typing import Optional
from ..shared import functionassociationlist as shared_functionassociationlist


@dataclasses.dataclass
class FunctionAssociations:
    r"""FunctionAssociations
    A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_functionassociationlist.FunctionAssociationList]] = dataclasses.field(default=None)
    
