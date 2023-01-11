import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import increasereplicationfactorrequest as shared_increasereplicationfactorrequest
from ..shared import increasereplicationfactorresponse as shared_increasereplicationfactorresponse

class IncreaseReplicationFactorXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_INCREASE_REPLICATION_FACTOR = "AmazonDAXV3.IncreaseReplicationFactor"


@dataclasses.dataclass
class IncreaseReplicationFactorHeaders:
    x_amz_target: IncreaseReplicationFactorXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IncreaseReplicationFactorRequest:
    headers: IncreaseReplicationFactorHeaders = dataclasses.field()
    request: shared_increasereplicationfactorrequest.IncreaseReplicationFactorRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncreaseReplicationFactorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    increase_replication_factor_response: Optional[shared_increasereplicationfactorresponse.IncreaseReplicationFactorResponse] = dataclasses.field(default=None)
    insufficient_cluster_capacity_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_cluster_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_vpc_network_state_fault: Optional[Any] = dataclasses.field(default=None)
    node_quota_for_cluster_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    node_quota_for_customer_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
