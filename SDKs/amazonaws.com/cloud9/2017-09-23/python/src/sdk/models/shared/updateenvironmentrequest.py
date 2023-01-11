import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedcredentialsaction_enum as shared_managedcredentialsaction_enum


@dataclass_json
@dataclasses.dataclass
class UpdateEnvironmentRequest:
    environment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    managed_credentials_action: Optional[shared_managedcredentialsaction_enum.ManagedCredentialsActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCredentialsAction') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
