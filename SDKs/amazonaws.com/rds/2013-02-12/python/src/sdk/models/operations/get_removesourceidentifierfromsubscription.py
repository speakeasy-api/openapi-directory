import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRemoveSourceIdentifierFromSubscriptionActionEnum(str, Enum):
    REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION = "RemoveSourceIdentifierFromSubscription"

class GetRemoveSourceIdentifierFromSubscriptionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class GetRemoveSourceIdentifierFromSubscriptionQueryParams:
    action: GetRemoveSourceIdentifierFromSubscriptionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceIdentifier', 'style': 'form', 'explode': True }})
    subscription_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SubscriptionName', 'style': 'form', 'explode': True }})
    version: GetRemoveSourceIdentifierFromSubscriptionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoveSourceIdentifierFromSubscriptionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRemoveSourceIdentifierFromSubscriptionRequest:
    headers: GetRemoveSourceIdentifierFromSubscriptionHeaders = dataclasses.field()
    query_params: GetRemoveSourceIdentifierFromSubscriptionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoveSourceIdentifierFromSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
