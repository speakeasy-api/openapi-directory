"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import repositoryprovider_enum as shared_repositoryprovider_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetRepositoryInput:
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    provider: shared_repositoryprovider_enum.RepositoryProviderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('provider') }})  
    