import dataclasses
from typing import Optional
from ..shared import settingvaluemodel as shared_settingvaluemodel
from ..shared import settingvaluemodel_haljson as shared_settingvaluemodel_haljson


@dataclasses.dataclass
class GetSettingValuePathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingValueRequest:
    path_params: GetSettingValuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_value_model: Optional[shared_settingvaluemodel.SettingValueModel] = dataclasses.field(default=None)
    setting_value_model_haljson: Optional[shared_settingvaluemodel_haljson.SettingValueModelHaljson] = dataclasses.field(default=None)
    
