import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogexportcacheinforesponse as shared_channelcatalogexportcacheinforesponse


@dataclasses.dataclass
class GetChannelCatalogExportationCacheInfoPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogExportationCacheInfoRequest:
    path_params: GetChannelCatalogExportationCacheInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogExportationCacheInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_export_cache_info_response: Optional[shared_channelcatalogexportcacheinforesponse.ChannelCatalogExportCacheInfoResponse] = dataclasses.field(default=None)
    
