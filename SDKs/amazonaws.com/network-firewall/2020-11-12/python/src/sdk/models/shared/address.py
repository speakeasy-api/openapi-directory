"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Address:
    r"""A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications."""
    
    address_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AddressDefinition') }})  
    