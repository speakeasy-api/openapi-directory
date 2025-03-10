"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import analyzedresource as shared_analyzedresource
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetAnalyzedResourceResponse:
    r"""The response to the request."""
    
    resource: Optional[shared_analyzedresource.AnalyzedResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource'), 'exclude': lambda f: f is None }})  
    