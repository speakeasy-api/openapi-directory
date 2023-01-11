import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selectiveauth_enum as shared_selectiveauth_enum
from ..shared import trustdirection_enum as shared_trustdirection_enum
from ..shared import trusttype_enum as shared_trusttype_enum


@dataclass_json
@dataclasses.dataclass
class CreateTrustRequest:
    r"""CreateTrustRequest
    <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    remote_domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    trust_direction: shared_trustdirection_enum.TrustDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustDirection') }})
    trust_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustPassword') }})
    conditional_forwarder_ip_addrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalForwarderIpAddrs') }})
    selective_auth: Optional[shared_selectiveauth_enum.SelectiveAuthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectiveAuth') }})
    trust_type: Optional[shared_trusttype_enum.TrustTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustType') }})
    
