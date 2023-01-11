import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describereplicationsubnetgroupsmessage as shared_describereplicationsubnetgroupsmessage
from ..shared import describereplicationsubnetgroupsresponse as shared_describereplicationsubnetgroupsresponse


@dataclasses.dataclass
class DescribeReplicationSubnetGroupsQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeReplicationSubnetGroupsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_SUBNET_GROUPS = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"


@dataclasses.dataclass
class DescribeReplicationSubnetGroupsHeaders:
    x_amz_target: DescribeReplicationSubnetGroupsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeReplicationSubnetGroupsRequest:
    headers: DescribeReplicationSubnetGroupsHeaders = dataclasses.field()
    query_params: DescribeReplicationSubnetGroupsQueryParams = dataclasses.field()
    request: shared_describereplicationsubnetgroupsmessage.DescribeReplicationSubnetGroupsMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeReplicationSubnetGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_replication_subnet_groups_response: Optional[shared_describereplicationsubnetgroupsresponse.DescribeReplicationSubnetGroupsResponse] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
