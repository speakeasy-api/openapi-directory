"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import tag as shared_tag


@dataclasses.dataclass
class AddTagsInput:
    
    resource_arns: list[str] = dataclasses.field()  
    tags: list[shared_tag.Tag] = dataclasses.field()  
    