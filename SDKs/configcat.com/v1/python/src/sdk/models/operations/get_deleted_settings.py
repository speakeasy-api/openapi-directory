import dataclasses
from typing import Optional
from ..shared import settingmodel_haljson as shared_settingmodel_haljson
from ..shared import settingmodel as shared_settingmodel


@dataclasses.dataclass
class GetDeletedSettingsPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeletedSettingsRequest:
    path_params: GetDeletedSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeletedSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_model_haljsons: Optional[list[shared_settingmodel_haljson.SettingModelHaljson]] = dataclasses.field(default=None)
    setting_models: Optional[list[shared_settingmodel.SettingModel]] = dataclasses.field(default=None)
    
