import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import environmenthealthattribute_enum as shared_environmenthealthattribute_enum

class GetDescribeEnvironmentHealthActionEnum(str, Enum):
    DESCRIBE_ENVIRONMENT_HEALTH = "DescribeEnvironmentHealth"

class GetDescribeEnvironmentHealthVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetDescribeEnvironmentHealthQueryParams:
    action: GetDescribeEnvironmentHealthActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeEnvironmentHealthVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attribute_names: Optional[list[shared_environmenthealthattribute_enum.EnvironmentHealthAttributeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AttributeNames', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeEnvironmentHealthHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeEnvironmentHealthRequest:
    headers: GetDescribeEnvironmentHealthHeaders = dataclasses.field()
    query_params: GetDescribeEnvironmentHealthQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeEnvironmentHealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
