import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitemrequest as shared_lineitemrequest
from ..shared import createorderoutput as shared_createorderoutput


@dataclasses.dataclass
class CreateOrderHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateOrderRequestBodyPaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "ALL_UPFRONT"
    NO_UPFRONT = "NO_UPFRONT"
    PARTIAL_UPFRONT = "PARTIAL_UPFRONT"

class CreateOrderRequestBodyPaymentTermEnum(str, Enum):
    THREE_YEARS = "THREE_YEARS"


@dataclass_json
@dataclasses.dataclass
class CreateOrderRequestBody:
    line_items: list[shared_lineitemrequest.LineItemRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItems') }})
    outpost_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutpostIdentifier') }})
    payment_option: CreateOrderRequestBodyPaymentOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentOption') }})
    payment_term: Optional[CreateOrderRequestBodyPaymentTermEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentTerm') }})
    

@dataclasses.dataclass
class CreateOrderRequest:
    headers: CreateOrderHeaders = dataclasses.field()
    request: CreateOrderRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_order_output: Optional[shared_createorderoutput.CreateOrderOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
