import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteInstanceEventWindowActionEnum(str, Enum):
    DELETE_INSTANCE_EVENT_WINDOW = "DeleteInstanceEventWindow"

class GetDeleteInstanceEventWindowVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetDeleteInstanceEventWindowQueryParams:
    action: GetDeleteInstanceEventWindowActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_event_window_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'InstanceEventWindowId', 'style': 'form', 'explode': True }})
    version: GetDeleteInstanceEventWindowVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    force_delete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ForceDelete', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteInstanceEventWindowHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeleteInstanceEventWindowRequest:
    headers: GetDeleteInstanceEventWindowHeaders = dataclasses.field()
    query_params: GetDeleteInstanceEventWindowQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteInstanceEventWindowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
