import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeclustersrequest as shared_describeclustersrequest
from ..shared import describeclustersresponse as shared_describeclustersresponse

class DescribeClustersXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_DESCRIBE_CLUSTERS = "AmazonMemoryDB.DescribeClusters"


@dataclasses.dataclass
class DescribeClustersHeaders:
    x_amz_target: DescribeClustersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeClustersRequest:
    headers: DescribeClustersHeaders = dataclasses.field()
    request: shared_describeclustersrequest.DescribeClustersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeClustersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    describe_clusters_response: Optional[shared_describeclustersresponse.DescribeClustersResponse] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
