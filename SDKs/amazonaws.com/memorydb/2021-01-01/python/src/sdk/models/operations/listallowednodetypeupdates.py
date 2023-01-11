import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listallowednodetypeupdatesrequest as shared_listallowednodetypeupdatesrequest
from ..shared import listallowednodetypeupdatesresponse as shared_listallowednodetypeupdatesresponse

class ListAllowedNodeTypeUpdatesXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_LIST_ALLOWED_NODE_TYPE_UPDATES = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"


@dataclasses.dataclass
class ListAllowedNodeTypeUpdatesHeaders:
    x_amz_target: ListAllowedNodeTypeUpdatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAllowedNodeTypeUpdatesRequest:
    headers: ListAllowedNodeTypeUpdatesHeaders = dataclasses.field()
    request: shared_listallowednodetypeupdatesrequest.ListAllowedNodeTypeUpdatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAllowedNodeTypeUpdatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_allowed_node_type_updates_response: Optional[shared_listallowednodetypeupdatesresponse.ListAllowedNodeTypeUpdatesResponse] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
