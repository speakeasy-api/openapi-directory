import dataclasses
from typing import Optional
from ..shared import settingmodel as shared_settingmodel
from ..shared import settingmodel_haljson as shared_settingmodel_haljson


@dataclasses.dataclass
class GetSettingPathParams:
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_model: Optional[shared_settingmodel.SettingModel] = dataclasses.field(default=None)
    setting_model_haljson: Optional[shared_settingmodel_haljson.SettingModelHaljson] = dataclasses.field(default=None)
    
