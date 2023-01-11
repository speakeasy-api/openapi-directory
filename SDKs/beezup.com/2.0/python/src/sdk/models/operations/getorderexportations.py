import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import orderexportations as shared_orderexportations


@dataclasses.dataclass
class GetOrderExportationsQueryParams:
    page_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    page_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    store_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrderExportationsHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderExportationsRequest:
    headers: GetOrderExportationsHeaders = dataclasses.field()
    query_params: GetOrderExportationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderExportationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    order_exportations: Optional[shared_orderexportations.OrderExportations] = dataclasses.field(default=None)
    
