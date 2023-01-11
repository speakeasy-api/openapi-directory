import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogproductinfo as shared_channelcatalogproductinfo


@dataclasses.dataclass
class GetChannelCatalogProductInfoPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogProductInfoRequest:
    path_params: GetChannelCatalogProductInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogProductInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_product_info: Optional[shared_channelcatalogproductinfo.ChannelCatalogProductInfo] = dataclasses.field(default=None)
    
