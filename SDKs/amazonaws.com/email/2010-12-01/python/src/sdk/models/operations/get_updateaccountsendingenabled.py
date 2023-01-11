import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateAccountSendingEnabledActionEnum(str, Enum):
    UPDATE_ACCOUNT_SENDING_ENABLED = "UpdateAccountSendingEnabled"

class GetUpdateAccountSendingEnabledVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetUpdateAccountSendingEnabledQueryParams:
    action: GetUpdateAccountSendingEnabledActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetUpdateAccountSendingEnabledVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateAccountSendingEnabledHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUpdateAccountSendingEnabledRequest:
    headers: GetUpdateAccountSendingEnabledHeaders = dataclasses.field()
    query_params: GetUpdateAccountSendingEnabledQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateAccountSendingEnabledResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
