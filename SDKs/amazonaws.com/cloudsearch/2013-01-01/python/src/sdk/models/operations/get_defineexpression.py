import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDefineExpressionActionEnum(str, Enum):
    DEFINE_EXPRESSION = "DefineExpression"


@dataclasses.dataclass
class GetDefineExpressionExpression:
    r"""GetDefineExpressionExpression
    A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
    """
    
    expression_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ExpressionName' }})
    expression_value: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ExpressionValue' }})
    
class GetDefineExpressionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclasses.dataclass
class GetDefineExpressionQueryParams:
    action: GetDefineExpressionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    expression: GetDefineExpressionExpression = dataclasses.field(metadata={'query_param': { 'field_name': 'Expression', 'style': 'form', 'explode': True }})
    version: GetDefineExpressionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDefineExpressionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDefineExpressionRequest:
    headers: GetDefineExpressionHeaders = dataclasses.field()
    query_params: GetDefineExpressionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDefineExpressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
