import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogproductscounters as shared_channelcatalogproductscounters


@dataclasses.dataclass
class GetChannelCatalogProductsCountersPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogProductsCountersRequest:
    path_params: GetChannelCatalogProductsCountersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogProductsCountersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_products_counters: Optional[shared_channelcatalogproductscounters.ChannelCatalogProductsCounters] = dataclasses.field(default=None)
    
