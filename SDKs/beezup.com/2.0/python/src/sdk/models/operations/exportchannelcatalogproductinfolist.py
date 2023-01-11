import dataclasses
from typing import Optional
from enum import Enum
from ..shared import exportformatinquerygeneralparameter_enum as shared_exportformatinquerygeneralparameter_enum
from ..shared import getchannelcatalogproductinfolistrequest as shared_getchannelcatalogproductinfolistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import beezup_common_link3 as shared_beezup_common_link3


@dataclasses.dataclass
class ExportChannelCatalogProductInfoListPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportChannelCatalogProductInfoListQueryParams:
    format: shared_exportformatinquerygeneralparameter_enum.ExportFormatInQueryGeneralParameterEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportChannelCatalogProductInfoListRequest:
    path_params: ExportChannelCatalogProductInfoListPathParams = dataclasses.field()
    query_params: ExportChannelCatalogProductInfoListQueryParams = dataclasses.field()
    request: shared_getchannelcatalogproductinfolistrequest.GetChannelCatalogProductInfoListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportChannelCatalogProductInfoListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    beez_up_common_link3: Optional[shared_beezup_common_link3.BeezUpCommonLink3] = dataclasses.field(default=None)
    
