import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyLambdaFunctionAssociations:
    r"""TooManyLambdaFunctionAssociations
    Your request contains more Lambda function associations than are allowed per distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
