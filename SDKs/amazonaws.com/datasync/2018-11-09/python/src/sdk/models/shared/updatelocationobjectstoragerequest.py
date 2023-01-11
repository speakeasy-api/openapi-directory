import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectstorageserverprotocol_enum as shared_objectstorageserverprotocol_enum


@dataclass_json
@dataclasses.dataclass
class UpdateLocationObjectStorageRequest:
    location_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    access_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    agent_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    secret_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretKey') }})
    server_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPort') }})
    server_protocol: Optional[shared_objectstorageserverprotocol_enum.ObjectStorageServerProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    
