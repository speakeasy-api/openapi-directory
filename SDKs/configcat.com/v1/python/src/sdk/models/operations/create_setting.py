import dataclasses
from typing import Optional
from ..shared import createsettingmodel as shared_createsettingmodel
from ..shared import settingmodel as shared_settingmodel
from ..shared import settingmodel_haljson as shared_settingmodel_haljson


@dataclasses.dataclass
class CreateSettingPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSettingRequests:
    create_setting_model: Optional[shared_createsettingmodel.CreateSettingModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_setting_model1: Optional[shared_createsettingmodel.CreateSettingModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_setting_model2: Optional[shared_createsettingmodel.CreateSettingModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateSettingRequest:
    path_params: CreateSettingPathParams = dataclasses.field()
    request: CreateSettingRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_model: Optional[shared_settingmodel.SettingModel] = dataclasses.field(default=None)
    setting_model_haljson: Optional[shared_settingmodel_haljson.SettingModelHaljson] = dataclasses.field(default=None)
    
