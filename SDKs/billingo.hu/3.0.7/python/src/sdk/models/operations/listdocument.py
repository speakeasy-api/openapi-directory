import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import paymentmethod_enum as shared_paymentmethod_enum
from ..shared import paymentstatus_enum as shared_paymentstatus_enum
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import documentlist as shared_documentlist
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class ListDocumentQueryParams:
    block_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'block_id', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    end_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_number', 'style': 'form', 'explode': True }})
    end_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_year', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    partner_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    payment_method: Optional[shared_paymentmethod_enum.PaymentMethodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payment_method', 'style': 'form', 'explode': True }})
    payment_status: Optional[shared_paymentstatus_enum.PaymentStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payment_status', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    start_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_number', 'style': 'form', 'explode': True }})
    start_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDocumentRequest:
    query_params: ListDocumentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDocumentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
