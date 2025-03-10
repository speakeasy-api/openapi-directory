"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class OptionStateEnum(str, Enum):
    r"""The state of processing a change to an option."""
    REQUIRES_INDEX_DOCUMENTS = 'RequiresIndexDocuments'
    PROCESSING = 'Processing'
    ACTIVE = 'Active'
