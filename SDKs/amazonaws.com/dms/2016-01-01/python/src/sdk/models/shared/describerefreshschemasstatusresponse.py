"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import refreshschemasstatus as shared_refreshschemasstatus
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeRefreshSchemasStatusResponse:
    r"""<p/>"""
    
    refresh_schemas_status: Optional[shared_refreshschemasstatus.RefreshSchemasStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RefreshSchemasStatus'), 'exclude': lambda f: f is None }})  
    