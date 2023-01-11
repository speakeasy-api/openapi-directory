import dataclasses
from typing import Optional
from ..shared import marketplacechannelcataloglist as shared_marketplacechannelcataloglist


@dataclasses.dataclass
class GetMarketplaceChannelCatalogsQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMarketplaceChannelCatalogsRequest:
    query_params: GetMarketplaceChannelCatalogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketplaceChannelCatalogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marketplace_channel_catalog_list: Optional[shared_marketplacechannelcataloglist.MarketplaceChannelCatalogList] = dataclasses.field(default=None)
    
