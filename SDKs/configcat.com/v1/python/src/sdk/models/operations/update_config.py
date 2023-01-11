import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateconfigrequest as shared_updateconfigrequest
from ..shared import configmodel as shared_configmodel
from ..shared import configmodel_haljson as shared_configmodel_haljson


@dataclasses.dataclass
class UpdateConfigPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConfigRequests:
    update_config_request: Optional[shared_updateconfigrequest.UpdateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_config_request1: Optional[shared_updateconfigrequest.UpdateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_config_request2: Optional[shared_updateconfigrequest.UpdateConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateConfigRequest:
    path_params: UpdateConfigPathParams = dataclasses.field()
    request: UpdateConfigRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_model: Optional[shared_configmodel.ConfigModel] = dataclasses.field(default=None)
    config_model_haljson: Optional[shared_configmodel_haljson.ConfigModelHaljson] = dataclasses.field(default=None)
    
