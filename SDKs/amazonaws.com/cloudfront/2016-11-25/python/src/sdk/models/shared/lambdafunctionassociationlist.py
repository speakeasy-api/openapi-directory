import dataclasses
from typing import Optional
from enum import Enum
from ..shared import eventtype_enum as shared_eventtype_enum


@dataclasses.dataclass
class LambdaFunctionAssociationList:
    r"""LambdaFunctionAssociationList
    A complex type that contains a Lambda function association.
    """
    
    event_type: Optional[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(default=None)
    lambda_function_arn: Optional[str] = dataclasses.field(default=None)
    
