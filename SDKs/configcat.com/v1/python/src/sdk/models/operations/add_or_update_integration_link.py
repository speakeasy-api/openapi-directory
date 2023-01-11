import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import integrationlinktype_enum as shared_integrationlinktype_enum
from ..shared import addorupdateintegrationlinkmodel as shared_addorupdateintegrationlinkmodel
from ..shared import integrationlinkmodel as shared_integrationlinkmodel


@dataclasses.dataclass
class AddOrUpdateIntegrationLinkPathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    integration_link_type: shared_integrationlinktype_enum.IntegrationLinkTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddOrUpdateIntegrationLinkRequests:
    add_or_update_integration_link_model: Optional[shared_addorupdateintegrationlinkmodel.AddOrUpdateIntegrationLinkModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    add_or_update_integration_link_model1: Optional[shared_addorupdateintegrationlinkmodel.AddOrUpdateIntegrationLinkModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_or_update_integration_link_model2: Optional[shared_addorupdateintegrationlinkmodel.AddOrUpdateIntegrationLinkModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class AddOrUpdateIntegrationLinkRequest:
    path_params: AddOrUpdateIntegrationLinkPathParams = dataclasses.field()
    request: Optional[AddOrUpdateIntegrationLinkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddOrUpdateIntegrationLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integration_link_model: Optional[shared_integrationlinkmodel.IntegrationLinkModel] = dataclasses.field(default=None)
    
