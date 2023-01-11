import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatesettingvaluemodel as shared_updatesettingvaluemodel
from ..shared import settingvaluemodel as shared_settingvaluemodel
from ..shared import settingvaluemodel_haljson as shared_settingvaluemodel_haljson


@dataclasses.dataclass
class ReplaceSettingValuePathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReplaceSettingValueQueryParams:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReplaceSettingValueRequests:
    update_setting_value_model: Optional[shared_updatesettingvaluemodel.UpdateSettingValueModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_setting_value_model1: Optional[shared_updatesettingvaluemodel.UpdateSettingValueModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_setting_value_model2: Optional[shared_updatesettingvaluemodel.UpdateSettingValueModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ReplaceSettingValueRequest:
    path_params: ReplaceSettingValuePathParams = dataclasses.field()
    query_params: ReplaceSettingValueQueryParams = dataclasses.field()
    request: ReplaceSettingValueRequests = dataclasses.field()
    

@dataclasses.dataclass
class ReplaceSettingValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_value_model: Optional[shared_settingvaluemodel.SettingValueModel] = dataclasses.field(default=None)
    setting_value_model_haljson: Optional[shared_settingvaluemodel_haljson.SettingValueModelHaljson] = dataclasses.field(default=None)
    
