import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import listofvalueitem as shared_listofvalueitem


@dataclasses.dataclass
class GetOrderManagementReadyMarketplaceBusinessCodeQueryParams:
    store_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderManagementReadyMarketplaceBusinessCodeHeaders:
    accept_language: Optional[list[str]] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderManagementReadyMarketplaceBusinessCodeRequest:
    headers: GetOrderManagementReadyMarketplaceBusinessCodeHeaders = dataclasses.field()
    query_params: GetOrderManagementReadyMarketplaceBusinessCodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderManagementReadyMarketplaceBusinessCodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    o_m_ready_marketplace_business_code_response: Optional[list[shared_listofvalueitem.ListOfValueItem]] = dataclasses.field(default=None)
    
