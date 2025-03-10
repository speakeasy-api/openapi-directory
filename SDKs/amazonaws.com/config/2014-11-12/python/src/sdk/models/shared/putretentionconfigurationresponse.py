"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import retentionconfiguration as shared_retentionconfiguration
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutRetentionConfigurationResponse:
    r"""Success"""
    
    retention_configuration: Optional[shared_retentionconfiguration.RetentionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RetentionConfiguration'), 'exclude': lambda f: f is None }})  
    