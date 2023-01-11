import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateGlobalClusterActionEnum(str, Enum):
    CREATE_GLOBAL_CLUSTER = "CreateGlobalCluster"

class GetCreateGlobalClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetCreateGlobalClusterQueryParams:
    action: GetCreateGlobalClusterActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'GlobalClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetCreateGlobalClusterVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DatabaseName', 'style': 'form', 'explode': True }})
    deletion_protection: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeletionProtection', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    source_db_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceDBClusterIdentifier', 'style': 'form', 'explode': True }})
    storage_encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StorageEncrypted', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateGlobalClusterHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateGlobalClusterRequest:
    headers: GetCreateGlobalClusterHeaders = dataclasses.field()
    query_params: GetCreateGlobalClusterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateGlobalClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
