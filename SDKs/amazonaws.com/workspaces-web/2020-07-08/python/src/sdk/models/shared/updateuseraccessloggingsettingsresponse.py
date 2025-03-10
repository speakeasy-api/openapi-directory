"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import useraccessloggingsettings as shared_useraccessloggingsettings
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateUserAccessLoggingSettingsResponse:
    r"""Success"""
    
    user_access_logging_settings: shared_useraccessloggingsettings.UserAccessLoggingSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userAccessLoggingSettings') }})  
    