"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import typedattributevalue as shared_typedattributevalue
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AttributeNameAndValue:
    r"""Identifies the attribute name and value for a typed link."""
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AttributeName') }})  
    value: shared_typedattributevalue.TypedAttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Value') }})  
    