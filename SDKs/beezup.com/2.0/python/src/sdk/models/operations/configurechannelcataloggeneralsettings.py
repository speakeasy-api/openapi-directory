import dataclasses
from typing import Optional
from ..shared import generalsettings as shared_generalsettings
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ConfigureChannelCatalogGeneralSettingsPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogGeneralSettingsRequest:
    path_params: ConfigureChannelCatalogGeneralSettingsPathParams = dataclasses.field()
    request: shared_generalsettings.GeneralSettings = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogGeneralSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
