import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import operation as shared_operation
from ..shared import settingvaluemodel as shared_settingvaluemodel
from ..shared import settingvaluemodel_haljson as shared_settingvaluemodel_haljson


@dataclasses.dataclass
class UpdateSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSettingValueBySdkkeyQueryParams:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSettingValueBySdkkeyRequests:
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateSettingValueBySdkkeyRequest:
    headers: UpdateSettingValueBySdkkeyHeaders = dataclasses.field()
    path_params: UpdateSettingValueBySdkkeyPathParams = dataclasses.field()
    query_params: UpdateSettingValueBySdkkeyQueryParams = dataclasses.field()
    request: UpdateSettingValueBySdkkeyRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSettingValueBySdkkeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting_value_model: Optional[shared_settingvaluemodel.SettingValueModel] = dataclasses.field(default=None)
    setting_value_model_haljson: Optional[shared_settingvaluemodel_haljson.SettingValueModelHaljson] = dataclasses.field(default=None)
    
