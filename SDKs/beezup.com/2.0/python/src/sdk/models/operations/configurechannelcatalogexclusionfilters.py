import dataclasses
from typing import Optional
from ..shared import exclusionfilter as shared_exclusionfilter
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ConfigureChannelCatalogExclusionFiltersPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogExclusionFiltersRequest:
    path_params: ConfigureChannelCatalogExclusionFiltersPathParams = dataclasses.field()
    request: list[shared_exclusionfilter.ExclusionFilter] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogExclusionFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
