import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import scaninput as shared_scaninput
from ..shared import scanoutput as shared_scanoutput


@dataclasses.dataclass
class ScanQueryParams:
    exclusive_start_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartKey', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class ScanXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20111205_SCAN = "DynamoDB_20111205.Scan"


@dataclasses.dataclass
class ScanHeaders:
    x_amz_target: ScanXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScanRequest:
    headers: ScanHeaders = dataclasses.field()
    query_params: ScanQueryParams = dataclasses.field()
    request: shared_scaninput.ScanInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    request_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    scan_output: Optional[shared_scanoutput.ScanOutput] = dataclasses.field(default=None)
    
