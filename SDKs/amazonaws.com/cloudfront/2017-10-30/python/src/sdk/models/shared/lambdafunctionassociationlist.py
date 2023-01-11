import dataclasses
from enum import Enum
from ..shared import eventtype_enum as shared_eventtype_enum


@dataclasses.dataclass
class LambdaFunctionAssociationList:
    r"""LambdaFunctionAssociationList
    A complex type that contains a Lambda function association.
    """
    
    event_type: shared_eventtype_enum.EventTypeEnum = dataclasses.field()
    lambda_function_arn: str = dataclasses.field()
    
