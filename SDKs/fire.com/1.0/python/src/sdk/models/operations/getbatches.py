import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetBatchesBatchStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class GetBatchesBatchTypesEnum(str, Enum):
    INTERNAL_TRANSFER = "INTERNAL_TRANSFER"
    BANK_TRANSFER = "BANK_TRANSFER"
    NEW_PAYEE = "NEW_PAYEE"

class GetBatchesOrderEnum(str, Enum):
    DESC = "DESC"
    ASC = "ASC"

class GetBatchesOrderByEnum(str, Enum):
    DATE = "DATE"


@dataclasses.dataclass
class GetBatchesQueryParams:
    batch_status: Optional[GetBatchesBatchStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'batchStatus', 'style': 'form', 'explode': True }})
    batch_types: Optional[GetBatchesBatchTypesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'batchTypes', 'style': 'form', 'explode': True }})
    order: Optional[GetBatchesOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_by: Optional[GetBatchesOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetBatchesBatchItemsBatchItemResult:
    r"""GetBatchesBatchItemsBatchItemResult
    The outcome of the attempted transaction.
    """
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class GetBatchesBatchItemsBatchItemStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class GetBatchesBatchItemsBatchItem:
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_after_charges: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountAfterCharges') }})
    batch_item_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemUuid') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeAmount') }})
    ican_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    ican_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    ref_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refId') }})
    result: Optional[GetBatchesBatchItemsBatchItemResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    status: Optional[GetBatchesBatchItemsBatchItemStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBatchesBatchItems:
    items: Optional[list[GetBatchesBatchItemsBatchItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class GetBatchesRequest:
    query_params: GetBatchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_items: Optional[GetBatchesBatchItems] = dataclasses.field(default=None)
    
