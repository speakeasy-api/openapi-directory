import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScimUserEmails:
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUserMeta:
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUserName:
    family_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    formatted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    
class ScimUserOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclasses.dataclass
class ScimUserOperations:
    op: ScimUserOperationsOpEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUser:
    r"""ScimUser
    SCIM /Users provisioning endpoints
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    emails: list[ScimUserEmails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    meta: ScimUserMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    name: ScimUserName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    groups: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    operations: Optional[list[ScimUserOperations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    organization_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    
