import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ldapsstatus_enum as shared_ldapsstatus_enum


@dataclass_json
@dataclasses.dataclass
class LdapsSettingInfo:
    r"""LdapsSettingInfo
    Contains general information about the LDAPS settings.
    """
    
    ldaps_status: Optional[shared_ldapsstatus_enum.LdapsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LDAPSStatus') }})
    ldaps_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LDAPSStatusReason') }})
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
