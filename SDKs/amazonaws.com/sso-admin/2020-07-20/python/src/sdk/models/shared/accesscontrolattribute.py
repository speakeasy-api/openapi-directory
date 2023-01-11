import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesscontrolattributevalue as shared_accesscontrolattributevalue


@dataclass_json
@dataclasses.dataclass
class AccessControlAttribute:
    r"""AccessControlAttribute
    These are Amazon Web Services SSO identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your Amazon Web Services resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, Amazon Web Services SSO passes the attribute values of the authenticated user into IAM for use in policy evaluation.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: shared_accesscontrolattributevalue.AccessControlAttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
