import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyCurrentDbClusterCapacityActionEnum(str, Enum):
    MODIFY_CURRENT_DB_CLUSTER_CAPACITY = "ModifyCurrentDBClusterCapacity"

class GetModifyCurrentDbClusterCapacityVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetModifyCurrentDbClusterCapacityQueryParams:
    action: GetModifyCurrentDbClusterCapacityActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyCurrentDbClusterCapacityVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    capacity: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Capacity', 'style': 'form', 'explode': True }})
    seconds_before_timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SecondsBeforeTimeout', 'style': 'form', 'explode': True }})
    timeout_action: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TimeoutAction', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyCurrentDbClusterCapacityHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyCurrentDbClusterCapacityRequest:
    headers: GetModifyCurrentDbClusterCapacityHeaders = dataclasses.field()
    query_params: GetModifyCurrentDbClusterCapacityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyCurrentDbClusterCapacityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
