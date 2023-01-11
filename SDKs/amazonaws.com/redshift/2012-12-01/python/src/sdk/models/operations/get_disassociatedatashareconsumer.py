import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDisassociateDataShareConsumerActionEnum(str, Enum):
    DISASSOCIATE_DATA_SHARE_CONSUMER = "DisassociateDataShareConsumer"

class GetDisassociateDataShareConsumerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetDisassociateDataShareConsumerQueryParams:
    action: GetDisassociateDataShareConsumerActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    data_share_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DataShareArn', 'style': 'form', 'explode': True }})
    version: GetDisassociateDataShareConsumerVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    consumer_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ConsumerArn', 'style': 'form', 'explode': True }})
    disassociate_entire_account: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DisassociateEntireAccount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDisassociateDataShareConsumerHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDisassociateDataShareConsumerRequest:
    headers: GetDisassociateDataShareConsumerHeaders = dataclasses.field()
    query_params: GetDisassociateDataShareConsumerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDisassociateDataShareConsumerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
