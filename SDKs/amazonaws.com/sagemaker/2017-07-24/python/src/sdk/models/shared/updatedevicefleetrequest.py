"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import edgeoutputconfig as shared_edgeoutputconfig
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateDeviceFleetRequest:
    
    device_fleet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeviceFleetName') }})  
    output_config: shared_edgeoutputconfig.EdgeOutputConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OutputConfig') }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    enable_iot_role_alias: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EnableIotRoleAlias'), 'exclude': lambda f: f is None }})  
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RoleArn'), 'exclude': lambda f: f is None }})  
    