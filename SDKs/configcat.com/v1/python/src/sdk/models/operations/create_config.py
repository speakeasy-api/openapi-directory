import dataclasses
from typing import Optional
from ..shared import createconfigrequest as shared_createconfigrequest
from ..shared import configmodel as shared_configmodel
from ..shared import configmodel_haljson as shared_configmodel_haljson


@dataclasses.dataclass
class CreateConfigPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConfigRequests:
    create_config_request: Optional[shared_createconfigrequest.CreateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_config_request1: Optional[shared_createconfigrequest.CreateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_config_request2: Optional[shared_createconfigrequest.CreateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateConfigRequest:
    path_params: CreateConfigPathParams = dataclasses.field()
    request: CreateConfigRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_model: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None)
    config_model_haljson: Optional[shared_configmodel_haljson.ConfigModelHaljson] = dataclasses.field(default=None)
    
