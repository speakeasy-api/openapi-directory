import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmodel as shared_configmodel
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import productmodel as shared_productmodel
from ..shared import settingdatamodel as shared_settingdatamodel


@dataclass_json
@dataclasses.dataclass
class IntegrationLinkDetail:
    config: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    product: Optional[shared_productmodel.ProductModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    setting: Optional[shared_settingdatamodel.SettingDataModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
