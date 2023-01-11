import dataclasses
from typing import Optional
from ..shared import configmodel as shared_configmodel
from ..shared import configmodel_haljson as shared_configmodel_haljson


@dataclasses.dataclass
class GetConfigPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigRequest:
    path_params: GetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_model: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None)
    config_model_haljson: Optional[shared_configmodel_haljson.ConfigModelHaljson] = dataclasses.field(default=None)
    
