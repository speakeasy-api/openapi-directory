import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import upgradeofferrequired as shared_upgradeofferrequired


@dataclasses.dataclass
class EnableChannelCatalogPathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableChannelCatalogRequest:
    path_params: EnableChannelCatalogPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnableChannelCatalogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    upgrade_offer_required: Optional[shared_upgradeofferrequired.UpgradeOfferRequired] = dataclasses.field(default=None)
    
