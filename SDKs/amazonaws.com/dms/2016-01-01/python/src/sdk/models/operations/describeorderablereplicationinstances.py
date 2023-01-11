import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import describeorderablereplicationinstancesmessage as shared_describeorderablereplicationinstancesmessage
from ..shared import describeorderablereplicationinstancesresponse as shared_describeorderablereplicationinstancesresponse


@dataclasses.dataclass
class DescribeOrderableReplicationInstancesQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeOrderableReplicationInstancesXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_ORDERABLE_REPLICATION_INSTANCES = "AmazonDMSv20160101.DescribeOrderableReplicationInstances"


@dataclasses.dataclass
class DescribeOrderableReplicationInstancesHeaders:
    x_amz_target: DescribeOrderableReplicationInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeOrderableReplicationInstancesRequest:
    headers: DescribeOrderableReplicationInstancesHeaders = dataclasses.field()
    query_params: DescribeOrderableReplicationInstancesQueryParams = dataclasses.field()
    request: shared_describeorderablereplicationinstancesmessage.DescribeOrderableReplicationInstancesMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeOrderableReplicationInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_orderable_replication_instances_response: Optional[shared_describeorderablereplicationinstancesresponse.DescribeOrderableReplicationInstancesResponse] = dataclasses.field(default=None)
    
