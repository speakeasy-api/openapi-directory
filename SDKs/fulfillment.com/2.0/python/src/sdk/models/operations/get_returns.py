import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby


@dataclasses.dataclass
class GetReturnsQueryParams:
    from_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReturnsSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2Order:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2Reason:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2:
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    non_restocked_reason: Optional[GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonRestockedReason') }})
    quantity_expected: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    quantity_restocked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityRestocked') }})
    quantity_returned: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReturned') }})
    quantity_shipped: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityShipped') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2Status:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2UserV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2ReturnV2:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reason: GetReturnsReturnsArrayV2ReturnV2Reason = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: GetReturnsReturnsArrayV2ReturnV2Status = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: GetReturnsReturnsArrayV2ReturnV2UserV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    order: Optional[GetReturnsReturnsArrayV2ReturnV2Order] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    returned_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnedBy') }})
    rma_items: Optional[list[GetReturnsReturnsArrayV2ReturnV2RmaItemV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaItems') }})
    rma_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2MetaPaginationV2:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    current_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_pages: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2Meta:
    pagination: Optional[GetReturnsReturnsArrayV2MetaPaginationV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReturnsReturnsArrayV2:
    data: Optional[list[GetReturnsReturnsArrayV2ReturnV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[GetReturnsReturnsArrayV2Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetReturnsRequest:
    query_params: GetReturnsQueryParams = dataclasses.field()
    security: GetReturnsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReturnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    returns_array_v2: Optional[GetReturnsReturnsArrayV2] = dataclasses.field(default=None)
    
