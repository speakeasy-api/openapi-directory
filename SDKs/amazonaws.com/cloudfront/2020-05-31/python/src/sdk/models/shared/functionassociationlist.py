import dataclasses
from enum import Enum
from ..shared import eventtype_enum as shared_eventtype_enum


@dataclasses.dataclass
class FunctionAssociationList:
    r"""FunctionAssociationList
    A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
    """
    
    event_type: shared_eventtype_enum.EventTypeEnum = dataclasses.field()
    function_arn: str = dataclasses.field()
    
