import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacedirectorytype_enum as shared_workspacedirectorytype_enum
from ..shared import selfservicepermissions as shared_selfservicepermissions
from ..shared import workspacedirectorystate_enum as shared_workspacedirectorystate_enum
from ..shared import tenancy_enum as shared_tenancy_enum
from ..shared import workspaceaccessproperties as shared_workspaceaccessproperties
from ..shared import defaultworkspacecreationproperties as shared_defaultworkspacecreationproperties


@dataclass_json
@dataclasses.dataclass
class WorkspaceDirectory:
    r"""WorkspaceDirectory
    Describes a directory that is used with Amazon WorkSpaces.
    """
    
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    customer_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerUserName') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    directory_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    directory_type: Optional[shared_workspacedirectorytype_enum.WorkspaceDirectoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryType') }})
    dns_ip_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddresses') }})
    iam_role_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleId') }})
    registration_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationCode') }})
    selfservice_permissions: Optional[shared_selfservicepermissions.SelfservicePermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfservicePermissions') }})
    state: Optional[shared_workspacedirectorystate_enum.WorkspaceDirectoryStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    subnet_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tenancy: Optional[shared_tenancy_enum.TenancyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    workspace_access_properties: Optional[shared_workspaceaccessproperties.WorkspaceAccessProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceAccessProperties') }})
    workspace_creation_properties: Optional[shared_defaultworkspacecreationproperties.DefaultWorkspaceCreationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceCreationProperties') }})
    workspace_security_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceSecurityGroupId') }})
    ip_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipGroupIds') }})
    
