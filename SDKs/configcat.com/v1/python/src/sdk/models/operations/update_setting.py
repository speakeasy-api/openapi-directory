import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import operation as shared_operation
from ..shared import settingmodel as shared_settingmodel
from ..shared import settingmodel_haljson as shared_settingmodel_haljson


@dataclasses.dataclass
class UpdateSettingPathParams:
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSettingRequests:
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateSettingRequest:
    path_params: UpdateSettingPathParams = dataclasses.field()
    request: UpdateSettingRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_model: Optional[shared_settingmodel.SettingModel] = dataclasses.field(default=None)
    setting_model_haljson: Optional[shared_settingmodel_haljson.SettingModelHaljson] = dataclasses.field(default=None)
    
