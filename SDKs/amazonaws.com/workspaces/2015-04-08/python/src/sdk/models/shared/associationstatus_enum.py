"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class AssociationStatusEnum(str, Enum):
    NOT_ASSOCIATED = 'NOT_ASSOCIATED'
    ASSOCIATED_WITH_OWNER_ACCOUNT = 'ASSOCIATED_WITH_OWNER_ACCOUNT'
    ASSOCIATED_WITH_SHARED_ACCOUNT = 'ASSOCIATED_WITH_SHARED_ACCOUNT'
    PENDING_ASSOCIATION = 'PENDING_ASSOCIATION'
    PENDING_DISASSOCIATION = 'PENDING_DISASSOCIATION'
