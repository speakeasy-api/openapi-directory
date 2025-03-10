"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import emergencycontact as shared_emergencycontact
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateEmergencyContactSettingsRequest:
    
    emergency_contact_list: Optional[list[shared_emergencycontact.EmergencyContact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EmergencyContactList'), 'exclude': lambda f: f is None }})  
    