import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iproute as shared_iproute


@dataclass_json
@dataclasses.dataclass
class AddIPRoutesRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    ip_routes: list[shared_iproute.IPRoute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRoutes') }})
    update_security_group_for_directory_controllers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateSecurityGroupForDirectoryControllers') }})
    
