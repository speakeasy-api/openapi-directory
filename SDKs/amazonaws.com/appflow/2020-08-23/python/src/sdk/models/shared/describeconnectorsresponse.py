"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import connectorconfiguration as shared_connectorconfiguration
from ..shared import connectordetail as shared_connectordetail
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeConnectorsResponse:
    r"""Success"""
    
    connector_configurations: Optional[dict[str, shared_connectorconfiguration.ConnectorConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connectorConfigurations'), 'exclude': lambda f: f is None }})  
    connectors: Optional[list[shared_connectordetail.ConnectorDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connectors'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    