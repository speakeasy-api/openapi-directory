import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogcategoryconfigurationlist as shared_channelcatalogcategoryconfigurationlist


@dataclasses.dataclass
class GetChannelCatalogCategoriesPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogCategoriesRequest:
    path_params: GetChannelCatalogCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_category_configuration_list: Optional[shared_channelcatalogcategoryconfigurationlist.ChannelCatalogCategoryConfigurationList] = dataclasses.field(default=None)
    
