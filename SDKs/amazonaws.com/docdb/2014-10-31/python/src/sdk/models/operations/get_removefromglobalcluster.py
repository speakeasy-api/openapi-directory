import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRemoveFromGlobalClusterActionEnum(str, Enum):
    REMOVE_FROM_GLOBAL_CLUSTER = "RemoveFromGlobalCluster"

class GetRemoveFromGlobalClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetRemoveFromGlobalClusterQueryParams:
    action: GetRemoveFromGlobalClusterActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DbClusterIdentifier', 'style': 'form', 'explode': True }})
    global_cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'GlobalClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetRemoveFromGlobalClusterVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoveFromGlobalClusterHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRemoveFromGlobalClusterRequest:
    headers: GetRemoveFromGlobalClusterHeaders = dataclasses.field()
    query_params: GetRemoveFromGlobalClusterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoveFromGlobalClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
