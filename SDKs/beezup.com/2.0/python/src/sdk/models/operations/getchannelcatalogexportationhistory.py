import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogexportationhistory as shared_channelcatalogexportationhistory


@dataclasses.dataclass
class GetChannelCatalogExportationHistoryPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogExportationHistoryQueryParams:
    page_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    page_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelCatalogExportationHistoryRequest:
    path_params: GetChannelCatalogExportationHistoryPathParams = dataclasses.field()
    query_params: GetChannelCatalogExportationHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogExportationHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_exportation_history: Optional[shared_channelcatalogexportationhistory.ChannelCatalogExportationHistory] = dataclasses.field(default=None)
    
