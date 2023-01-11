import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyDistributionsWithLambdaAssociations:
    r"""TooManyDistributionsWithLambdaAssociations
    Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
