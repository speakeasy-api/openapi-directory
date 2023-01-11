import dataclasses
from typing import Optional
from ..shared import addchannelcatalogrequest as shared_addchannelcatalogrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import links_getchannelcataloglink as shared_links_getchannelcataloglink


@dataclasses.dataclass
class AddChannelCatalogRequest:
    request: shared_addchannelcatalogrequest.AddChannelCatalogRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddChannelCatalogResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    links_get_channel_catalog_link: Optional[shared_links_getchannelcataloglink.LinksGetChannelCatalogLink] = dataclasses.field(default=None)
    
