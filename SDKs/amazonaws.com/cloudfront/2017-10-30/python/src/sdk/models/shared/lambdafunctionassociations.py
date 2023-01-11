import dataclasses
from typing import Optional
from ..shared import lambdafunctionassociationlist as shared_lambdafunctionassociationlist


@dataclasses.dataclass
class LambdaFunctionAssociations:
    r"""LambdaFunctionAssociations
    <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p>
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_lambdafunctionassociationlist.LambdaFunctionAssociationList]] = dataclasses.field(default=None)
    
