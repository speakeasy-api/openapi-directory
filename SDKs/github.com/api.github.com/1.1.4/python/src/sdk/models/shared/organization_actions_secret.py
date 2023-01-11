import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrganizationActionsSecretVisibilityEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    SELECTED = "selected"


@dataclass_json
@dataclasses.dataclass
class OrganizationActionsSecret:
    r"""OrganizationActionsSecret
    Secrets for GitHub Actions for an organization.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    visibility: OrganizationActionsSecretVisibilityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    selected_repositories_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repositories_url') }})
    
