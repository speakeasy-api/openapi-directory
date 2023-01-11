import dataclasses
from typing import Optional
from ..shared import configurecatalogcolumncatalogrequest as shared_configurecatalogcolumncatalogrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ImportationConfigureCatalogColumnPathParams:
    column_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'columnId', 'style': 'simple', 'explode': False }})
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationConfigureCatalogColumnRequest:
    path_params: ImportationConfigureCatalogColumnPathParams = dataclasses.field()
    request: shared_configurecatalogcolumncatalogrequest.ConfigureCatalogColumnCatalogRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportationConfigureCatalogColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
