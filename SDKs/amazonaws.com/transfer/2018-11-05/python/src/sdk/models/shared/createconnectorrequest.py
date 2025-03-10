"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import as2connectorconfig as shared_as2connectorconfig
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateConnectorRequest:
    
    access_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccessRole') }})  
    as2_config: shared_as2connectorconfig.As2ConnectorConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('As2Config') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Url') }})  
    logging_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LoggingRole'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    