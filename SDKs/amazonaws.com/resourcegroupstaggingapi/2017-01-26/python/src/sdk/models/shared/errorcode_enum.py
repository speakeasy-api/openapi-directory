import dataclasses
from enum import Enum

class ErrorCodeEnum(str, Enum):
    INTERNAL_SERVICE_EXCEPTION = "InternalServiceException"
    INVALID_PARAMETER_EXCEPTION = "InvalidParameterException"

