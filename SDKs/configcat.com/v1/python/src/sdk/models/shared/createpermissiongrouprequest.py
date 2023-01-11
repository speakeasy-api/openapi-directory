import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesstype_enum as shared_accesstype_enum
from ..shared import environmentaccessmodel as shared_environmentaccessmodel
from ..shared import environmentaccesstype_enum as shared_environmentaccesstype_enum


@dataclass_json
@dataclasses.dataclass
class CreatePermissionGroupRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    access_type: Optional[shared_accesstype_enum.AccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    can_create_or_update_config: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateConfig') }})
    can_create_or_update_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateEnvironment') }})
    can_create_or_update_setting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateSetting') }})
    can_create_or_update_tag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateTag') }})
    can_delete_config: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteConfig') }})
    can_delete_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteEnvironment') }})
    can_delete_setting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteSetting') }})
    can_delete_tag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteTag') }})
    can_manage_integrations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageIntegrations') }})
    can_manage_members: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageMembers') }})
    can_manage_product_preferences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageProductPreferences') }})
    can_manage_webhook: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageWebhook') }})
    can_rotate_sdk_key: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRotateSdkKey') }})
    can_tag_setting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canTagSetting') }})
    can_use_export_import: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseExportImport') }})
    can_view_product_audit_log: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewProductAuditLog') }})
    can_view_product_statistics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewProductStatistics') }})
    can_view_sdk_key: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewSdkKey') }})
    environment_accesses: Optional[list[shared_environmentaccessmodel.EnvironmentAccessModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccesses') }})
    new_environment_access_type: Optional[shared_environmentaccesstype_enum.EnvironmentAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newEnvironmentAccessType') }})
    
