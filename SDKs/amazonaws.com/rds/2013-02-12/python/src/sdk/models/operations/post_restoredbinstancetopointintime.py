import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostRestoreDbInstanceToPointInTimeActionEnum(str, Enum):
    RESTORE_DB_INSTANCE_TO_POINT_IN_TIME = "RestoreDBInstanceToPointInTime"

class PostRestoreDbInstanceToPointInTimeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class PostRestoreDbInstanceToPointInTimeQueryParams:
    action: PostRestoreDbInstanceToPointInTimeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostRestoreDbInstanceToPointInTimeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRestoreDbInstanceToPointInTimeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRestoreDbInstanceToPointInTimeRequest:
    headers: PostRestoreDbInstanceToPointInTimeHeaders = dataclasses.field()
    query_params: PostRestoreDbInstanceToPointInTimeQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclasses.dataclass
class PostRestoreDbInstanceToPointInTimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
