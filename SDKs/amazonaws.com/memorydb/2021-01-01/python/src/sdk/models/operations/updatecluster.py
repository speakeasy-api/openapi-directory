import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateclusterrequest as shared_updateclusterrequest
from ..shared import updateclusterresponse as shared_updateclusterresponse

class UpdateClusterXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UPDATE_CLUSTER = "AmazonMemoryDB.UpdateCluster"


@dataclasses.dataclass
class UpdateClusterHeaders:
    x_amz_target: UpdateClusterXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateClusterRequest:
    headers: UpdateClusterHeaders = dataclasses.field()
    request: shared_updateclusterrequest.UpdateClusterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    acl_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    cluster_quota_for_customer_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_acl_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_cluster_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_kms_key_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_node_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_vpc_network_state_fault: Optional[Any] = dataclasses.field(default=None)
    no_operation_fault: Optional[Any] = dataclasses.field(default=None)
    node_quota_for_cluster_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    node_quota_for_customer_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    parameter_group_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    shards_per_cluster_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    update_cluster_response: Optional[shared_updateclusterresponse.UpdateClusterResponse] = dataclasses.field(default=None)
    
