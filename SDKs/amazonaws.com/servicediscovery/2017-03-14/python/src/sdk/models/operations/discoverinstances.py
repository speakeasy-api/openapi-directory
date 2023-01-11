import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import discoverinstancesrequest as shared_discoverinstancesrequest
from ..shared import discoverinstancesresponse as shared_discoverinstancesresponse

class DiscoverInstancesXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_DISCOVER_INSTANCES = "Route53AutoNaming_v20170314.DiscoverInstances"


@dataclasses.dataclass
class DiscoverInstancesHeaders:
    x_amz_target: DiscoverInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiscoverInstancesRequest:
    headers: DiscoverInstancesHeaders = dataclasses.field()
    request: shared_discoverinstancesrequest.DiscoverInstancesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DiscoverInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    discover_instances_response: Optional[shared_discoverinstancesresponse.DiscoverInstancesResponse] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    namespace_not_found: Optional[Any] = dataclasses.field(default=None)
    request_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    service_not_found: Optional[Any] = dataclasses.field(default=None)
    
