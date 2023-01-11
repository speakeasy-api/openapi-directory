import dataclasses
from typing import Optional
from ..shared import getchannelcatalogproductinfolistrequest as shared_getchannelcatalogproductinfolistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogproductinfolist as shared_channelcatalogproductinfolist


@dataclasses.dataclass
class GetChannelCatalogProductInfoListPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogProductInfoListRequest:
    path_params: GetChannelCatalogProductInfoListPathParams = dataclasses.field()
    request: shared_getchannelcatalogproductinfolistrequest.GetChannelCatalogProductInfoListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetChannelCatalogProductInfoListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_product_info_list: Optional[shared_channelcatalogproductinfolist.ChannelCatalogProductInfoList] = dataclasses.field(default=None)
    
