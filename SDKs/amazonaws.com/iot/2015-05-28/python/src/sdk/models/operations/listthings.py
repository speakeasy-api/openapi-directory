import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listthingsresponse as shared_listthingsresponse


@dataclasses.dataclass
class ListThingsQueryParams:
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'attributeName', 'style': 'form', 'explode': True }})
    attribute_value: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'attributeValue', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    thing_type_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thingTypeName', 'style': 'form', 'explode': True }})
    use_prefix_attribute_value: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'usePrefixAttributeValue', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListThingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListThingsRequest:
    headers: ListThingsHeaders = dataclasses.field()
    query_params: ListThingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListThingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_things_response: Optional[shared_listthingsresponse.ListThingsResponse] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
