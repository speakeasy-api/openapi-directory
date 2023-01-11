import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCloneReceiptRuleSetActionEnum(str, Enum):
    CLONE_RECEIPT_RULE_SET = "CloneReceiptRuleSet"

class GetCloneReceiptRuleSetVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetCloneReceiptRuleSetQueryParams:
    action: GetCloneReceiptRuleSetActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    original_rule_set_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OriginalRuleSetName', 'style': 'form', 'explode': True }})
    rule_set_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'RuleSetName', 'style': 'form', 'explode': True }})
    version: GetCloneReceiptRuleSetVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCloneReceiptRuleSetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCloneReceiptRuleSetRequest:
    headers: GetCloneReceiptRuleSetHeaders = dataclasses.field()
    query_params: GetCloneReceiptRuleSetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCloneReceiptRuleSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
