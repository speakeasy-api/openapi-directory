"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class EnvironmentHealthStatusEnum(str, Enum):
    NO_DATA = 'NoData'
    UNKNOWN = 'Unknown'
    PENDING = 'Pending'
    OK = 'Ok'
    INFO = 'Info'
    WARNING = 'Warning'
    DEGRADED = 'Degraded'
    SEVERE = 'Severe'
    SUSPENDED = 'Suspended'
