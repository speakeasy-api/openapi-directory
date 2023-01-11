import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class DeleteChannelCatalogProductValueOverridePathParams:
    channel_catalog_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelCatalogId', 'style': 'simple', 'explode': False }})
    channel_column_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelColumnId', 'style': 'simple', 'explode': False }})
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChannelCatalogProductValueOverrideRequest:
    path_params: DeleteChannelCatalogProductValueOverridePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteChannelCatalogProductValueOverrideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
