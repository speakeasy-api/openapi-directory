import dataclasses
from typing import Optional
from ..shared import configmodel_haljson as shared_configmodel_haljson
from ..shared import configmodel as shared_configmodel


@dataclasses.dataclass
class GetConfigsPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigsRequest:
    path_params: GetConfigsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_model_haljsons: Optional[list[shared_configmodel_haljson.ConfigModelHaljson]] = dataclasses.field(default=None)
    config_models: Optional[list[shared_configmodel.ConfigModel]] = dataclasses.field(default=None)
    
