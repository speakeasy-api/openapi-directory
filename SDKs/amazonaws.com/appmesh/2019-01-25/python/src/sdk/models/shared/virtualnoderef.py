"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VirtualNodeRef:
    r"""An object that represents a virtual node returned by a list operation."""
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('arn') }})  
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    last_updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('meshName') }})  
    mesh_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('meshOwner') }})  
    resource_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resourceOwner') }})  
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('version') }})  
    virtual_node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('virtualNodeName') }})  
    