"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class OnFailureEnum(str, Enum):
    DO_NOTHING = 'DO_NOTHING'
    ROLLBACK = 'ROLLBACK'
    DELETE = 'DELETE'
