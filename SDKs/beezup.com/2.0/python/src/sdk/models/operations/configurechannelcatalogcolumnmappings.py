import dataclasses
from typing import Optional
from ..shared import channelcatalogcolumnmapping as shared_channelcatalogcolumnmapping
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ConfigureChannelCatalogColumnMappingsPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogColumnMappingsRequest:
    path_params: ConfigureChannelCatalogColumnMappingsPathParams = dataclasses.field()
    request: list[shared_channelcatalogcolumnmapping.ChannelCatalogColumnMapping] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogColumnMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
