import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dedicatedtenancysupportresultenum_enum as shared_dedicatedtenancysupportresultenum_enum
from ..shared import dedicatedtenancymodificationstateenum_enum as shared_dedicatedtenancymodificationstateenum_enum


@dataclass_json
@dataclasses.dataclass
class AccountModification:
    r"""AccountModification
    Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. 
    """
    
    dedicated_tenancy_management_cidr_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancyManagementCidrRange') }})
    dedicated_tenancy_support: Optional[shared_dedicatedtenancysupportresultenum_enum.DedicatedTenancySupportResultEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancySupport') }})
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    modification_state: Optional[shared_dedicatedtenancymodificationstateenum_enum.DedicatedTenancyModificationStateEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationState') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
