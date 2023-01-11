import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientauthenticationstatus_enum as shared_clientauthenticationstatus_enum
from ..shared import clientauthenticationtype_enum as shared_clientauthenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class ClientAuthenticationSettingInfo:
    r"""ClientAuthenticationSettingInfo
    Contains information about a client authentication method for a directory.
    """
    
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_clientauthenticationstatus_enum.ClientAuthenticationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    type: Optional[shared_clientauthenticationtype_enum.ClientAuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
