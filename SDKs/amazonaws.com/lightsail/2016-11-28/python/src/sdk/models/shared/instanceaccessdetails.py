import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hostkeyattributes as shared_hostkeyattributes
from ..shared import passworddata as shared_passworddata
from ..shared import instanceaccessprotocol_enum as shared_instanceaccessprotocol_enum


@dataclass_json
@dataclasses.dataclass
class InstanceAccessDetails:
    r"""InstanceAccessDetails
    The parameters for gaining temporary access to one of your Amazon Lightsail instances.
    """
    
    cert_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certKey') }})
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    host_keys: Optional[list[shared_hostkeyattributes.HostKeyAttributes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostKeys') }})
    instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_data: Optional[shared_passworddata.PasswordData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordData') }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    protocol: Optional[shared_instanceaccessprotocol_enum.InstanceAccessProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
