import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidLambdaFunctionAssociation:
    r"""InvalidLambdaFunctionAssociation
    The specified Lambda function association is invalid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
