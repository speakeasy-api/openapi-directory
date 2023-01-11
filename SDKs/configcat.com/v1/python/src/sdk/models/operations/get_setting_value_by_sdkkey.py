import dataclasses
from typing import Optional
from ..shared import settingvaluemodel as shared_settingvaluemodel
from ..shared import settingvaluemodel_haljson as shared_settingvaluemodel_haljson


@dataclasses.dataclass
class GetSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingValueBySdkkeyRequest:
    headers: GetSettingValueBySdkkeyHeaders = dataclasses.field()
    path_params: GetSettingValueBySdkkeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingValueBySdkkeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_value_model: Optional[shared_settingvaluemodel.SettingValueModel] = dataclasses.field(default=None)
    setting_value_model_haljson: Optional[shared_settingvaluemodel_haljson.SettingValueModelHaljson] = dataclasses.field(default=None)
    
