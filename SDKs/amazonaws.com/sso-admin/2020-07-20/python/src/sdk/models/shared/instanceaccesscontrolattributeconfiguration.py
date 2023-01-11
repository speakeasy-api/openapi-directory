import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesscontrolattribute as shared_accesscontrolattribute


@dataclass_json
@dataclasses.dataclass
class InstanceAccessControlAttributeConfiguration:
    r"""InstanceAccessControlAttributeConfiguration
    Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
    """
    
    access_control_attributes: list[shared_accesscontrolattribute.AccessControlAttribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlAttributes') }})
    
