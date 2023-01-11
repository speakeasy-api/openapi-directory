import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlspolicy_enum as shared_tlspolicy_enum


@dataclass_json
@dataclasses.dataclass
class DeliveryOptions:
    r"""DeliveryOptions
    Used to associate a configuration set with a dedicated IP pool.
    """
    
    sending_pool_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingPoolName') }})
    tls_policy: Optional[shared_tlspolicy_enum.TLSPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsPolicy') }})
    
