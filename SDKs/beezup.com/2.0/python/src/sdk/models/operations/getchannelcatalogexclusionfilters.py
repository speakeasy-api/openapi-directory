import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import exclusionfiltersresponse as shared_exclusionfiltersresponse


@dataclasses.dataclass
class GetChannelCatalogExclusionFiltersPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogExclusionFiltersRequest:
    path_params: GetChannelCatalogExclusionFiltersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogExclusionFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    exclusion_filters_response: Optional[shared_exclusionfiltersresponse.ExclusionFiltersResponse] = dataclasses.field(default=None)
    
