import dataclasses
from enum import Enum

class SslSupportMethodEnum(str, Enum):
    SNI_ONLY = "sni-only"
    VIP = "vip"
    STATIC_IP = "static-ip"

