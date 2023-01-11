import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverdnssecvalidationstatus_enum as shared_resolverdnssecvalidationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ResolverDnssecConfig:
    r"""ResolverDnssecConfig
    A complex type that contains information about a configuration for DNSSEC validation.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    validation_status: Optional[shared_resolverdnssecvalidationstatus_enum.ResolverDnssecValidationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatus') }})
    
