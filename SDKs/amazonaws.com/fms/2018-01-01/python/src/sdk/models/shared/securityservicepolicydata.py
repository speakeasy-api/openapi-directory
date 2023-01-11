import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityservicetype_enum as shared_securityservicetype_enum


@dataclass_json
@dataclasses.dataclass
class SecurityServicePolicyData:
    r"""SecurityServicePolicyData
    Details about the security service that is being used to protect the resources.
    """
    
    type: shared_securityservicetype_enum.SecurityServiceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    managed_service_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedServiceData') }})
    
