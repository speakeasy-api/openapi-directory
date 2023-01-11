import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationstate_enum as shared_applicationstate_enum


@dataclass_json
@dataclasses.dataclass
class DescribeApplicationResponse:
    application_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationArn') }})
    application_creation_date: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationCreationDate') }})
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_last_update_date: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationLastUpdateDate') }})
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    application_state: shared_applicationstate_enum.ApplicationStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationState') }})
    application_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationUrl') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    application_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationDescription') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    sso_client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoClientId') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
