import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain_enum as shared_domain_enum
from ..shared import endpointdetails as shared_endpointdetails
from ..shared import endpointtype_enum as shared_endpointtype_enum
from ..shared import identityproviderdetails as shared_identityproviderdetails
from ..shared import identityprovidertype_enum as shared_identityprovidertype_enum
from ..shared import protocol_enum as shared_protocol_enum
from ..shared import tag as shared_tag
from ..shared import workflowdetails as shared_workflowdetails


@dataclass_json
@dataclasses.dataclass
class CreateServerRequest:
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    domain: Optional[shared_domain_enum.DomainEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    endpoint_details: Optional[shared_endpointdetails.EndpointDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDetails') }})
    endpoint_type: Optional[shared_endpointtype_enum.EndpointTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    host_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostKey') }})
    identity_provider_details: Optional[shared_identityproviderdetails.IdentityProviderDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderDetails') }})
    identity_provider_type: Optional[shared_identityprovidertype_enum.IdentityProviderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    logging_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    protocols: Optional[list[shared_protocol_enum.ProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    security_policy_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicyName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    workflow_details: Optional[shared_workflowdetails.WorkflowDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowDetails') }})
    
