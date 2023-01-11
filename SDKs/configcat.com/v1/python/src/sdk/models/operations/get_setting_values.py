import dataclasses
from typing import Optional
from ..shared import configsettingvaluesmodel as shared_configsettingvaluesmodel


@dataclasses.dataclass
class GetSettingValuesPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingValuesRequest:
    path_params: GetSettingValuesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_setting_values_model: Optional[shared_configsettingvaluesmodel.ConfigSettingValuesModel] = dataclasses.field(default=None)
    
