"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import datacatalog as shared_datacatalog
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetDataCatalogOutput:
    r"""Success"""
    
    data_catalog: Optional[shared_datacatalog.DataCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DataCatalog'), 'exclude': lambda f: f is None }})  
    