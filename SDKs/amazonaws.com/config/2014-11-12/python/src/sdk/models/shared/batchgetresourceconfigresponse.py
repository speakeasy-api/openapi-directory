"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import baseconfigurationitem as shared_baseconfigurationitem
from ..shared import resourcekey as shared_resourcekey
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BatchGetResourceConfigResponse:
    r"""Success"""
    
    base_configuration_items: Optional[list[shared_baseconfigurationitem.BaseConfigurationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('baseConfigurationItems'), 'exclude': lambda f: f is None }})  
    unprocessed_resource_keys: Optional[list[shared_resourcekey.ResourceKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unprocessedResourceKeys'), 'exclude': lambda f: f is None }})  
    