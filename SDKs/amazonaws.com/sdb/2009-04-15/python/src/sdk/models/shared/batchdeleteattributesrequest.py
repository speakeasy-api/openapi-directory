"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import deletableitemlist as shared_deletableitemlist


@dataclasses.dataclass
class BatchDeleteAttributesRequest:
    
    domain_name: str = dataclasses.field()  
    items: list[shared_deletableitemlist.DeletableItemList] = dataclasses.field()  
    