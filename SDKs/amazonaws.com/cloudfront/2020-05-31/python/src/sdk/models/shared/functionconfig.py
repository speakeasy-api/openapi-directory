import dataclasses
from enum import Enum
from ..shared import functionruntime_enum as shared_functionruntime_enum


@dataclasses.dataclass
class FunctionConfig:
    r"""FunctionConfig
    Contains configuration information about a CloudFront function.
    """
    
    comment: str = dataclasses.field()
    runtime: shared_functionruntime_enum.FunctionRuntimeEnum = dataclasses.field()
    
