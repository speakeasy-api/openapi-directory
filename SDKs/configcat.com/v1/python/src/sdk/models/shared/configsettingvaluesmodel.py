import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmodel as shared_configmodel
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import configsettingvaluemodel as shared_configsettingvaluemodel


@dataclass_json
@dataclasses.dataclass
class ConfigSettingValuesModel:
    config: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    setting_values: Optional[list[shared_configsettingvaluemodel.ConfigSettingValueModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingValues') }})
    
