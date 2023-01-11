import dataclasses
from enum import Enum

class LoadBalancerProtocolEnum(str, Enum):
    HTTP_HTTPS = "HTTP_HTTPS"
    HTTP = "HTTP"

