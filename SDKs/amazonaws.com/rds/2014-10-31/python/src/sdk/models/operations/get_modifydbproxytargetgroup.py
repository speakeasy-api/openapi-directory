import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyDbProxyTargetGroupActionEnum(str, Enum):
    MODIFY_DB_PROXY_TARGET_GROUP = "ModifyDBProxyTargetGroup"


@dataclasses.dataclass
class GetModifyDbProxyTargetGroupConnectionPoolConfig:
    r"""GetModifyDbProxyTargetGroupConnectionPoolConfig
    Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
    """
    
    connection_borrow_timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ConnectionBorrowTimeout' }})
    init_query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InitQuery' }})
    max_connections_percent: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxConnectionsPercent' }})
    max_idle_connections_percent: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxIdleConnectionsPercent' }})
    session_pinning_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SessionPinningFilters' }})
    
class GetModifyDbProxyTargetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetModifyDbProxyTargetGroupQueryParams:
    action: GetModifyDbProxyTargetGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_proxy_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBProxyName', 'style': 'form', 'explode': True }})
    target_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TargetGroupName', 'style': 'form', 'explode': True }})
    version: GetModifyDbProxyTargetGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    connection_pool_config: Optional[GetModifyDbProxyTargetGroupConnectionPoolConfig] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ConnectionPoolConfig', 'style': 'form', 'explode': True }})
    new_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NewName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyDbProxyTargetGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyDbProxyTargetGroupRequest:
    headers: GetModifyDbProxyTargetGroupHeaders = dataclasses.field()
    query_params: GetModifyDbProxyTargetGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyDbProxyTargetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
