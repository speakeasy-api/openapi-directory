import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import oneorders_get_responses_404_content_application_1json_schema as shared_oneorders_get_responses_404_content_application_1json_schema


@dataclasses.dataclass
class GetInventoryQueryParams:
    external_sku_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'externalSkuNames', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInventorySecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Item:
    r"""GetInventoryItemInventoryArrayV2ItemInventoryV2Item
    Item this inventory data is based on
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sku_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuReference') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant:
    r"""GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
    Merchant that owns this item
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal:
    available_to_promise: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableToPromise') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity:
    total: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2:
    item: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Item] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    merchant: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    quantity: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2MetaPaginationV2:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    current_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_pages: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2Meta:
    pagination: Optional[GetInventoryItemInventoryArrayV2MetaPaginationV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventoryItemInventoryArrayV2:
    data: Optional[list[GetInventoryItemInventoryArrayV2ItemInventoryV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[GetInventoryItemInventoryArrayV2Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetInventoryRequest:
    query_params: GetInventoryQueryParams = dataclasses.field()
    security: GetInventorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_inventory_array_v2: Optional[GetInventoryItemInventoryArrayV2] = dataclasses.field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared_oneorders_get_responses_404_content_application_1json_schema.OneordersGetResponses404ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
