"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AudioSpecification:
    r"""Specifies the audio input specifications."""
    
    end_timeout_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endTimeoutMs') }})  
    max_length_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxLengthMs') }})  
    