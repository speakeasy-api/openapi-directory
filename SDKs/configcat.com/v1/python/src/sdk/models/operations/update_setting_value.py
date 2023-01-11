import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import operation as shared_operation
from ..shared import settingvaluemodel as shared_settingvaluemodel
from ..shared import settingvaluemodel_haljson as shared_settingvaluemodel_haljson


@dataclasses.dataclass
class UpdateSettingValuePathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSettingValueQueryParams:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateSettingValueRequests:
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateSettingValueRequest:
    path_params: UpdateSettingValuePathParams = dataclasses.field()
    query_params: UpdateSettingValueQueryParams = dataclasses.field()
    request: UpdateSettingValueRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSettingValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_value_model: Optional[shared_settingvaluemodel.SettingValueModel] = dataclasses.field(default=None)
    setting_value_model_haljson: Optional[shared_settingvaluemodel_haljson.SettingValueModelHaljson] = dataclasses.field(default=None)
    
