import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetResizeClusterActionEnum(str, Enum):
    RESIZE_CLUSTER = "ResizeCluster"

class GetResizeClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetResizeClusterQueryParams:
    action: GetResizeClusterActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetResizeClusterVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    classic: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Classic', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClusterType', 'style': 'form', 'explode': True }})
    node_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NodeType', 'style': 'form', 'explode': True }})
    number_of_nodes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NumberOfNodes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResizeClusterHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResizeClusterRequest:
    headers: GetResizeClusterHeaders = dataclasses.field()
    query_params: GetResizeClusterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResizeClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
