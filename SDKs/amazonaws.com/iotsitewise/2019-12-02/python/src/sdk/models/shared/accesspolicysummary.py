import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identity as shared_identity
from ..shared import permission_enum as shared_permission_enum
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class AccessPolicySummary:
    r"""AccessPolicySummary
    Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identity: shared_identity.Identity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    permission: shared_permission_enum.PermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    resource: shared_resource.Resource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
