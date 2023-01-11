import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingmethod_enum as shared_billingmethod_enum


@dataclass_json
@dataclasses.dataclass
class CreateRemoteAccessSessionConfiguration:
    r"""CreateRemoteAccessSessionConfiguration
    Configuration settings for a remote access session, including billing method.
    """
    
    billing_method: Optional[shared_billingmethod_enum.BillingMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    vpce_configuration_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationArns') }})
    
