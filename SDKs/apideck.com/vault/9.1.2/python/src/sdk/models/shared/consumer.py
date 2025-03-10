"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import consumerconnection as shared_consumerconnection
from ..shared import consumermetadata as shared_consumermetadata
from ..shared import requestcountallocation as shared_requestcountallocation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Consumer:
    
    consumer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('consumer_id') }})
    r"""Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID."""  
    aggregated_request_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('aggregated_request_count'), 'exclude': lambda f: f is None }})  
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('application_id'), 'exclude': lambda f: f is None }})
    r"""ID of your Apideck Application"""  
    connections: Optional[list[shared_consumerconnection.ConsumerConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connections'), 'exclude': lambda f: f is None }})  
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created'), 'exclude': lambda f: f is None }})  
    metadata: Optional[shared_consumermetadata.ConsumerMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('metadata'), 'exclude': lambda f: f is None }})
    r"""The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended."""  
    modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('modified'), 'exclude': lambda f: f is None }})  
    request_count_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('request_count_updated'), 'exclude': lambda f: f is None }})  
    request_counts: Optional[shared_requestcountallocation.RequestCountAllocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('request_counts'), 'exclude': lambda f: f is None }})  
    services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('services'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConsumerInput:
    
    consumer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('consumer_id') }})
    r"""Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID."""  
    metadata: Optional[shared_consumermetadata.ConsumerMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('metadata'), 'exclude': lambda f: f is None }})
    r"""The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended."""  
    