import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listnamespacesrequest as shared_listnamespacesrequest
from ..shared import listnamespacesresponse as shared_listnamespacesresponse


@dataclasses.dataclass
class ListNamespacesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListNamespacesXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_LIST_NAMESPACES = "Route53AutoNaming_v20170314.ListNamespaces"


@dataclasses.dataclass
class ListNamespacesHeaders:
    x_amz_target: ListNamespacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListNamespacesRequest:
    headers: ListNamespacesHeaders = dataclasses.field()
    query_params: ListNamespacesQueryParams = dataclasses.field()
    request: shared_listnamespacesrequest.ListNamespacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListNamespacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    list_namespaces_response: Optional[shared_listnamespacesresponse.ListNamespacesResponse] = dataclasses.field(default=None)
    
