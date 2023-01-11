import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmodel as shared_configmodel
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import integrationlinkmodel as shared_integrationlinkmodel
from ..shared import rolloutpercentageitemmodel as shared_rolloutpercentageitemmodel
from ..shared import rolloutrulemodel as shared_rolloutrulemodel
from ..shared import settingdatamodel as shared_settingdatamodel
from ..shared import settingtagmodel as shared_settingtagmodel


@dataclass_json
@dataclasses.dataclass
class SettingValueModel:
    config: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    integration_links: Optional[list[shared_integrationlinkmodel.IntegrationLinkModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationLinks') }})
    last_updater_user_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserEmail') }})
    last_updater_user_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserFullName') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    rollout_percentage_items: Optional[list[shared_rolloutpercentageitemmodel.RolloutPercentageItemModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutPercentageItems') }})
    rollout_rules: Optional[list[shared_rolloutrulemodel.RolloutRuleModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutRules') }})
    setting: Optional[shared_settingdatamodel.SettingDataModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    setting_tags: Optional[list[shared_settingtagmodel.SettingTagModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingTags') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
