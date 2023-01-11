import dataclasses
from typing import Optional
from ..shared import settingmodel_haljson as shared_settingmodel_haljson
from ..shared import settingmodel as shared_settingmodel


@dataclasses.dataclass
class GetSettingsByTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsByTagRequest:
    path_params: GetSettingsByTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsByTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_model_haljsons: Optional[list[shared_settingmodel_haljson.SettingModelHaljson]] = dataclasses.field(default=None)
    setting_models: Optional[list[shared_settingmodel.SettingModel]] = dataclasses.field(default=None)
    
