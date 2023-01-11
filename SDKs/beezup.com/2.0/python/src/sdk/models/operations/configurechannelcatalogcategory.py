import dataclasses
from typing import Optional
from ..shared import configurecategoryrequest as shared_configurecategoryrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ConfigureChannelCatalogCategoryPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogCategoryRequest:
    path_params: ConfigureChannelCatalogCategoryPathParams = dataclasses.field()
    request: shared_configurecategoryrequest.ConfigureCategoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfigureChannelCatalogCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
