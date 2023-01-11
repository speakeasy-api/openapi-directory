import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import channelcatalogmarketplaceproperties as shared_channelcatalogmarketplaceproperties


@dataclasses.dataclass
class GetChannelCatalogMarketplacePropertiesPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogMarketplacePropertiesQueryParams:
    redirection_page_url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'redirectionPageUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelCatalogMarketplacePropertiesHeaders:
    accept_language: Optional[list[str]] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCatalogMarketplacePropertiesRequest:
    headers: GetChannelCatalogMarketplacePropertiesHeaders = dataclasses.field()
    path_params: GetChannelCatalogMarketplacePropertiesPathParams = dataclasses.field()
    query_params: GetChannelCatalogMarketplacePropertiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCatalogMarketplacePropertiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    channel_catalog_marketplace_properties: Optional[shared_channelcatalogmarketplaceproperties.ChannelCatalogMarketplaceProperties] = dataclasses.field(default=None)
    
