import dataclasses
from typing import Optional
from enum import Enum
from ..shared import integrationlinktype_enum as shared_integrationlinktype_enum
from ..shared import deleteintegrationlinkmodel as shared_deleteintegrationlinkmodel


@dataclasses.dataclass
class DeleteIntegrationLinkPathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    integration_link_type: shared_integrationlinktype_enum.IntegrationLinkTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteIntegrationLinkRequest:
    path_params: DeleteIntegrationLinkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteIntegrationLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_integration_link_model: Optional[shared_deleteintegrationlinkmodel.DeleteIntegrationLinkModel] = dataclasses.field(default=None)
    
