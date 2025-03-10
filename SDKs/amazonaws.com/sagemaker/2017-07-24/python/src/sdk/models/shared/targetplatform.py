"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import targetplatformaccelerator_enum as shared_targetplatformaccelerator_enum
from ..shared import targetplatformarch_enum as shared_targetplatformarch_enum
from ..shared import targetplatformos_enum as shared_targetplatformos_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TargetPlatform:
    r"""Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>."""
    
    arch: shared_targetplatformarch_enum.TargetPlatformArchEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Arch') }})  
    os: shared_targetplatformos_enum.TargetPlatformOsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Os') }})  
    accelerator: Optional[shared_targetplatformaccelerator_enum.TargetPlatformAcceleratorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Accelerator'), 'exclude': lambda f: f is None }})  
    