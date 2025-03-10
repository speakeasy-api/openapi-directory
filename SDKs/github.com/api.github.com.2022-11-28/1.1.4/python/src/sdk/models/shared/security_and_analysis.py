"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class SecurityAndAnalysisAdvancedSecurityStatusEnum(str, Enum):
    ENABLED = 'enabled'
    DISABLED = 'disabled'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SecurityAndAnalysisAdvancedSecurity:
    
    status: Optional[SecurityAndAnalysisAdvancedSecurityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    
class SecurityAndAnalysisSecretScanningStatusEnum(str, Enum):
    ENABLED = 'enabled'
    DISABLED = 'disabled'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SecurityAndAnalysisSecretScanning:
    
    status: Optional[SecurityAndAnalysisSecretScanningStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    
class SecurityAndAnalysisSecretScanningPushProtectionStatusEnum(str, Enum):
    ENABLED = 'enabled'
    DISABLED = 'disabled'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SecurityAndAnalysisSecretScanningPushProtection:
    
    status: Optional[SecurityAndAnalysisSecretScanningPushProtectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SecurityAndAnalysis:
    
    advanced_security: Optional[SecurityAndAnalysisAdvancedSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('advanced_security'), 'exclude': lambda f: f is None }})  
    secret_scanning: Optional[SecurityAndAnalysisSecretScanning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secret_scanning'), 'exclude': lambda f: f is None }})  
    secret_scanning_push_protection: Optional[SecurityAndAnalysisSecretScanningPushProtection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secret_scanning_push_protection'), 'exclude': lambda f: f is None }})  
    