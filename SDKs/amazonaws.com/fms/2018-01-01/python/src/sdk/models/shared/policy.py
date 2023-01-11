import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetag as shared_resourcetag
from ..shared import securityservicepolicydata as shared_securityservicepolicydata


@dataclass_json
@dataclasses.dataclass
class Policy:
    r"""Policy
    An Firewall Manager policy.
    """
    
    exclude_resource_tags: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeResourceTags') }})
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    remediation_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationEnabled') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    security_service_policy_data: shared_securityservicepolicydata.SecurityServicePolicyData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityServicePolicyData') }})
    delete_unused_fm_managed_resources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteUnusedFMManagedResources') }})
    exclude_map: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeMap') }})
    include_map: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeMap') }})
    policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_update_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyUpdateToken') }})
    resource_tags: Optional[list[shared_resourcetag.ResourceTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    resource_type_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypeList') }})
    
