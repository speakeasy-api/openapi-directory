import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrationlinktype_enum as shared_integrationlinktype_enum
from ..shared import settingtype_enum as shared_settingtype_enum
from ..shared import rolloutpercentageitemmodel as shared_rolloutpercentageitemmodel
from ..shared import rolloutrulemodel as shared_rolloutrulemodel


@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    products: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization:
    links: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded:
    organization: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks:
    configs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    environments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    permission_groups: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission-groups') }})
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct:
    embedded: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbedded:
    product: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfigLinks:
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedConfig:
    embedded: Optional[SettingValueModelHaljsonEmbeddedConfigEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[SettingValueModelHaljsonEmbeddedConfigLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    products: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization:
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded:
    organization: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks:
    configs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    environments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    permission_groups: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission-groups') }})
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct:
    embedded: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded:
    product: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentLinks:
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedEnvironment:
    embedded: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedIntegrationLinks:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    integration_link_type: Optional[shared_integrationlinktype_enum.IntegrationLinkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationLinkType') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedSetting:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    creator_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorFullName') }})
    expiration_warning_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationWarningAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hint') }})
    is_watching: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isWatching') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmail') }})
    owner_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerFullName') }})
    setting_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    setting_type: Optional[shared_settingtype_enum.SettingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingType') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbeddedSettingTags:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    setting_tag_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingTagId') }})
    tag_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonEmbedded:
    config: Optional[SettingValueModelHaljsonEmbeddedConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[SettingValueModelHaljsonEmbeddedEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    integration_links: Optional[list[SettingValueModelHaljsonEmbeddedIntegrationLinks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationLinks') }})
    setting: Optional[SettingValueModelHaljsonEmbeddedSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    setting_tags: Optional[list[SettingValueModelHaljsonEmbeddedSettingTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingTags') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljsonLinks:
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingValueModelHaljson:
    embedded: Optional[SettingValueModelHaljsonEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[SettingValueModelHaljsonLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    last_updater_user_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserEmail') }})
    last_updater_user_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserFullName') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    rollout_percentage_items: Optional[list[shared_rolloutpercentageitemmodel.RolloutPercentageItemModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutPercentageItems') }})
    rollout_rules: Optional[list[shared_rolloutrulemodel.RolloutRuleModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutRules') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
