"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import fsxprotocol as shared_fsxprotocol
from ..shared import taglistentry as shared_taglistentry
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateLocationFsxOntapRequest:
    
    protocol: shared_fsxprotocol.FsxProtocol = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Protocol') }})
    r"""Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system."""  
    security_group_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SecurityGroupArns') }})  
    storage_virtual_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StorageVirtualMachineArn') }})  
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Subdirectory'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    