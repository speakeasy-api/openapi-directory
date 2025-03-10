"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import attributekey as shared_attributekey
from ..shared import typedattributevalue as shared_typedattributevalue
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AttributeKeyAndValue:
    r"""The combination of an attribute key and an attribute value."""
    
    key: shared_attributekey.AttributeKey = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Key') }})  
    value: shared_typedattributevalue.TypedAttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Value') }})  
    