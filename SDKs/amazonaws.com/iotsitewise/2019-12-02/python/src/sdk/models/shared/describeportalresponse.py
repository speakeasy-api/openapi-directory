import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarms as shared_alarms
from ..shared import authmode_enum as shared_authmode_enum
from ..shared import imagelocation as shared_imagelocation
from ..shared import portalstatus as shared_portalstatus


@dataclass_json
@dataclasses.dataclass
class DescribePortalResponse:
    portal_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalArn') }})
    portal_client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalClientId') }})
    portal_contact_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalContactEmail') }})
    portal_creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalId') }})
    portal_last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalName') }})
    portal_start_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStartUrl') }})
    portal_status: shared_portalstatus.PortalStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStatus') }})
    alarms: Optional[shared_alarms.Alarms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    notification_sender_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSenderEmail') }})
    portal_auth_mode: Optional[shared_authmode_enum.AuthModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalAuthMode') }})
    portal_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalDescription') }})
    portal_logo_image_location: Optional[shared_imagelocation.ImageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLogoImageLocation') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
