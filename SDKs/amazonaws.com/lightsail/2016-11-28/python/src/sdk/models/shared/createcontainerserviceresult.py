"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import containerservice as shared_containerservice
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateContainerServiceResult:
    r"""Success"""
    
    container_service: Optional[shared_containerservice.ContainerService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('containerService'), 'exclude': lambda f: f is None }})  
    