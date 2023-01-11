import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForUserRequest:
    path_params: EnterpriseAdminSyncLdapMappingForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_sync_ldap_mapping_for_user_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON] = dataclasses.field(default=None)
    
