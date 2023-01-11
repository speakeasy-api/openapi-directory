import dataclasses
from typing import Optional
from enum import Enum
from ..shared import integrationlinktype_enum as shared_integrationlinktype_enum
from ..shared import integrationlinkdetailsmodel as shared_integrationlinkdetailsmodel


@dataclasses.dataclass
class GetIntegrationLinkDetailsPathParams:
    integration_link_type: shared_integrationlinktype_enum.IntegrationLinkTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationLinkDetailsRequest:
    path_params: GetIntegrationLinkDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationLinkDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integration_link_details_model: Optional[shared_integrationlinkdetailsmodel.IntegrationLinkDetailsModel] = dataclasses.field(default=None)
    
