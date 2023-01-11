import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identity as shared_identity
from ..shared import permission_enum as shared_permission_enum
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class DescribeAccessPolicyResponse:
    access_policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyArn') }})
    access_policy_creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyId') }})
    access_policy_identity: shared_identity.Identity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyIdentity') }})
    access_policy_last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_permission: shared_permission_enum.PermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyPermission') }})
    access_policy_resource: shared_resource.Resource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyResource') }})
    
