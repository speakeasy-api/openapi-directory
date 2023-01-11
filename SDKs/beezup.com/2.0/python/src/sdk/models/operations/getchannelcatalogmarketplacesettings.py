import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogmarketplacesettings as shared_channelcatalogmarketplacesettings


@dataclasses.dataclass
class GetChannelCatalogMarketplaceSettingsPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogMarketplaceSettingsRequest:
    path_params: GetChannelCatalogMarketplaceSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogMarketplaceSettingsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_marketplace_settings: Optional[shared_channelcatalogmarketplacesettings.ChannelCatalogMarketplaceSettings] = dataclasses.field(default=None)
    
