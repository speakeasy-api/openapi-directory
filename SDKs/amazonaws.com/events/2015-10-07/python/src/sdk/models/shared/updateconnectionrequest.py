import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateconnectionauthrequestparameters as shared_updateconnectionauthrequestparameters
from ..shared import connectionauthorizationtype_enum as shared_connectionauthorizationtype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    auth_parameters: Optional[shared_updateconnectionauthrequestparameters.UpdateConnectionAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthParameters') }})
    authorization_type: Optional[shared_connectionauthorizationtype_enum.ConnectionAuthorizationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
