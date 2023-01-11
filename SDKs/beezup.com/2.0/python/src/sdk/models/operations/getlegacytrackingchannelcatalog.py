import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import legacytrackingchannelcatalog as shared_legacytrackingchannelcatalog


@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogRequest:
    path_params: GetLegacyTrackingChannelCatalogPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLegacyTrackingChannelCatalogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    legacy_tracking_channel_catalog: Optional[shared_legacytrackingchannelcatalog.LegacyTrackingChannelCatalog] = dataclasses.field(default=None)
    
