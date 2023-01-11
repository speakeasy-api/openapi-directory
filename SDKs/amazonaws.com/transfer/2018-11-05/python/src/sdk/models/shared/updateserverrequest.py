import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointdetails as shared_endpointdetails
from ..shared import endpointtype_enum as shared_endpointtype_enum
from ..shared import identityproviderdetails as shared_identityproviderdetails
from ..shared import protocoldetails as shared_protocoldetails
from ..shared import protocol_enum as shared_protocol_enum
from ..shared import workflowdetails as shared_workflowdetails


@dataclass_json
@dataclasses.dataclass
class UpdateServerRequest:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    endpoint_details: Optional[shared_endpointdetails.EndpointDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDetails') }})
    endpoint_type: Optional[shared_endpointtype_enum.EndpointTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    host_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostKey') }})
    identity_provider_details: Optional[shared_identityproviderdetails.IdentityProviderDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderDetails') }})
    logging_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    protocol_details: Optional[shared_protocoldetails.ProtocolDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolDetails') }})
    protocols: Optional[list[shared_protocol_enum.ProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    security_policy_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicyName') }})
    workflow_details: Optional[shared_workflowdetails.WorkflowDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowDetails') }})
    
