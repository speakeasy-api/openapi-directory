"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import storageconnectortype_enum as shared_storageconnectortype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class StorageConnector:
    r"""Describes a connector that enables persistent storage for users."""
    
    connector_type: shared_storageconnectortype_enum.StorageConnectorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConnectorType') }})  
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Domains'), 'exclude': lambda f: f is None }})  
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceIdentifier'), 'exclude': lambda f: f is None }})  
    