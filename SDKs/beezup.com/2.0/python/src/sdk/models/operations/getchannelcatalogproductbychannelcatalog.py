import dataclasses
from typing import Optional
from ..shared import channelcatalogproductbychannelcatalogrequest as shared_channelcatalogproductbychannelcatalogrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogproductbychannelcatalogresponse as shared_channelcatalogproductbychannelcatalogresponse


@dataclasses.dataclass
class GetChannelCatalogProductByChannelCatalogRequest:
    request: shared_channelcatalogproductbychannelcatalogrequest.ChannelCatalogProductByChannelCatalogRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetChannelCatalogProductByChannelCatalogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_product_by_channel_catalog_response: Optional[shared_channelcatalogproductbychannelcatalogresponse.ChannelCatalogProductByChannelCatalogResponse] = dataclasses.field(default=None)
    
