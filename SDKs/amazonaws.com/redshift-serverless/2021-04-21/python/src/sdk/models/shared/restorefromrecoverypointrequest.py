"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RestoreFromRecoveryPointRequest:
    
    namespace_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('namespaceName') }})  
    recovery_point_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recoveryPointId') }})  
    workgroup_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('workgroupName') }})  
    