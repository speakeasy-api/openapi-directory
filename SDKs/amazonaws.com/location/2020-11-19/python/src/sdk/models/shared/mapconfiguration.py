"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MapConfiguration:
    r"""Specifies the map tile style selected from an available provider."""
    
    style: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Style') }})  
    