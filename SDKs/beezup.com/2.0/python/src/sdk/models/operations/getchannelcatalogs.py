import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcataloglist as shared_channelcataloglist


@dataclasses.dataclass
class GetChannelCatalogsQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelCatalogsRequest:
    query_params: GetChannelCatalogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_list: Optional[shared_channelcataloglist.ChannelCatalogList] = dataclasses.field(default=None)
    
