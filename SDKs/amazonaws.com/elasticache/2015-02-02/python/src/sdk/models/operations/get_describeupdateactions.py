import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import serviceupdatestatus_enum as shared_serviceupdatestatus_enum
from ..shared import updateactionstatus_enum as shared_updateactionstatus_enum

class GetDescribeUpdateActionsActionEnum(str, Enum):
    DESCRIBE_UPDATE_ACTIONS = "DescribeUpdateActions"


@dataclasses.dataclass
class GetDescribeUpdateActionsServiceUpdateTimeRange:
    r"""GetDescribeUpdateActionsServiceUpdateTimeRange
    Filters update actions from the service updates that are in available status during the time range.
    """
    
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime' }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime' }})
    
class GetDescribeUpdateActionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDescribeUpdateActionsQueryParams:
    action: GetDescribeUpdateActionsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeUpdateActionsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterIds', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    replication_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupIds', 'style': 'form', 'explode': True }})
    service_update_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateName', 'style': 'form', 'explode': True }})
    service_update_status: Optional[list[shared_serviceupdatestatus_enum.ServiceUpdateStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateStatus', 'style': 'form', 'explode': True }})
    service_update_time_range: Optional[GetDescribeUpdateActionsServiceUpdateTimeRange] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateTimeRange', 'style': 'form', 'explode': True }})
    show_node_level_update_status: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ShowNodeLevelUpdateStatus', 'style': 'form', 'explode': True }})
    update_action_status: Optional[list[shared_updateactionstatus_enum.UpdateActionStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UpdateActionStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeUpdateActionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeUpdateActionsRequest:
    headers: GetDescribeUpdateActionsHeaders = dataclasses.field()
    query_params: GetDescribeUpdateActionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeUpdateActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
