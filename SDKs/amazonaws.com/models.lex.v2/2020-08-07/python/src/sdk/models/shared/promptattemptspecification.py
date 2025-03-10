"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import allowedinputtypes as shared_allowedinputtypes
from ..shared import audioanddtmfinputspecification as shared_audioanddtmfinputspecification
from ..shared import textinputspecification as shared_textinputspecification
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PromptAttemptSpecification:
    r"""Specifies the settings on a prompt attempt."""
    
    allowed_input_types: shared_allowedinputtypes.AllowedInputTypes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowedInputTypes') }})  
    allow_interrupt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowInterrupt'), 'exclude': lambda f: f is None }})  
    audio_and_dtmf_input_specification: Optional[shared_audioanddtmfinputspecification.AudioAndDTMFInputSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audioAndDTMFInputSpecification'), 'exclude': lambda f: f is None }})  
    text_input_specification: Optional[shared_textinputspecification.TextInputSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('textInputSpecification'), 'exclude': lambda f: f is None }})  
    