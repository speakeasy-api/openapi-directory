import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import failovershardrequest as shared_failovershardrequest
from ..shared import failovershardresponse as shared_failovershardresponse

class FailoverShardXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_FAILOVER_SHARD = "AmazonMemoryDB.FailoverShard"


@dataclasses.dataclass
class FailoverShardHeaders:
    x_amz_target: FailoverShardXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FailoverShardRequest:
    headers: FailoverShardHeaders = dataclasses.field()
    request: shared_failovershardrequest.FailoverShardRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FailoverShardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_call_rate_for_customer_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    failover_shard_response: Optional[shared_failovershardresponse.FailoverShardResponse] = dataclasses.field(default=None)
    invalid_cluster_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_kms_key_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    shard_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    test_failover_not_available_fault: Optional[Any] = dataclasses.field(default=None)
    
