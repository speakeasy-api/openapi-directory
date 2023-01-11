import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ClearChannelCatalogExportationCachePathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClearChannelCatalogExportationCacheRequest:
    path_params: ClearChannelCatalogExportationCachePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ClearChannelCatalogExportationCacheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
