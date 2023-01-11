import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listprotocolslistsrequest as shared_listprotocolslistsrequest
from ..shared import listprotocolslistsresponse as shared_listprotocolslistsresponse


@dataclasses.dataclass
class ListProtocolsListsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListProtocolsListsXAmzTargetEnum(str, Enum):
    AWSFMS_20180101_LIST_PROTOCOLS_LISTS = "AWSFMS_20180101.ListProtocolsLists"


@dataclasses.dataclass
class ListProtocolsListsHeaders:
    x_amz_target: ListProtocolsListsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListProtocolsListsRequest:
    headers: ListProtocolsListsHeaders = dataclasses.field()
    query_params: ListProtocolsListsQueryParams = dataclasses.field()
    request: shared_listprotocolslistsrequest.ListProtocolsListsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListProtocolsListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    list_protocols_lists_response: Optional[shared_listprotocolslistsresponse.ListProtocolsListsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
