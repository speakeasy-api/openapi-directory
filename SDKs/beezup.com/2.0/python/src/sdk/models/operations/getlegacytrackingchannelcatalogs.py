import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import legacytrackingchannelcataloglist as shared_legacytrackingchannelcataloglist


@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogsQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogsRequest:
    query_params: GetLegacyTrackingChannelCatalogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    legacy_tracking_channel_catalog_list: Optional[shared_legacytrackingchannelcataloglist.LegacyTrackingChannelCatalogList] = dataclasses.field(default=None)
    
