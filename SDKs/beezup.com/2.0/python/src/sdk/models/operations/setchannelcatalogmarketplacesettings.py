import dataclasses
from typing import Optional
from ..shared import setchannelcatalogmarketplacesettingsrequest as shared_setchannelcatalogmarketplacesettingsrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class SetChannelCatalogMarketplaceSettingsPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetChannelCatalogMarketplaceSettingsRequest:
    path_params: SetChannelCatalogMarketplaceSettingsPathParams = dataclasses.field()
    request: shared_setchannelcatalogmarketplacesettingsrequest.SetChannelCatalogMarketplaceSettingsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetChannelCatalogMarketplaceSettingsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
