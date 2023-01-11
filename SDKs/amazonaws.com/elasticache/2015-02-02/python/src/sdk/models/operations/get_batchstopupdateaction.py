import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetBatchStopUpdateActionActionEnum(str, Enum):
    BATCH_STOP_UPDATE_ACTION = "BatchStopUpdateAction"

class GetBatchStopUpdateActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetBatchStopUpdateActionQueryParams:
    action: GetBatchStopUpdateActionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    service_update_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ServiceUpdateName', 'style': 'form', 'explode': True }})
    version: GetBatchStopUpdateActionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterIds', 'style': 'form', 'explode': True }})
    replication_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBatchStopUpdateActionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBatchStopUpdateActionRequest:
    headers: GetBatchStopUpdateActionHeaders = dataclasses.field()
    query_params: GetBatchStopUpdateActionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchStopUpdateActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
