"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AcknowledgeThirdPartyJobInput:
    r"""Represents the input of an AcknowledgeThirdPartyJob action."""
    
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clientToken') }})  
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobId') }})  
    nonce: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nonce') }})  
    