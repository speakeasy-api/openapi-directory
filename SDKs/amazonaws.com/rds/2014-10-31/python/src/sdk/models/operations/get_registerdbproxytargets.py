import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRegisterDbProxyTargetsActionEnum(str, Enum):
    REGISTER_DB_PROXY_TARGETS = "RegisterDBProxyTargets"

class GetRegisterDbProxyTargetsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetRegisterDbProxyTargetsQueryParams:
    action: GetRegisterDbProxyTargetsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_proxy_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBProxyName', 'style': 'form', 'explode': True }})
    version: GetRegisterDbProxyTargetsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_cluster_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifiers', 'style': 'form', 'explode': True }})
    db_instance_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifiers', 'style': 'form', 'explode': True }})
    target_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRegisterDbProxyTargetsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegisterDbProxyTargetsRequest:
    headers: GetRegisterDbProxyTargetsHeaders = dataclasses.field()
    query_params: GetRegisterDbProxyTargetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRegisterDbProxyTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
