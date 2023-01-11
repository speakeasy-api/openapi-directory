import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeresourcecollectionhealthresponse as shared_describeresourcecollectionhealthresponse

class DescribeResourceCollectionHealthResourceCollectionTypeEnum(str, Enum):
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"


@dataclasses.dataclass
class DescribeResourceCollectionHealthPathParams:
    resource_collection_type: DescribeResourceCollectionHealthResourceCollectionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceCollectionType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeResourceCollectionHealthQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeResourceCollectionHealthHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeResourceCollectionHealthRequest:
    headers: DescribeResourceCollectionHealthHeaders = dataclasses.field()
    path_params: DescribeResourceCollectionHealthPathParams = dataclasses.field()
    query_params: DescribeResourceCollectionHealthQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeResourceCollectionHealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_resource_collection_health_response: Optional[shared_describeresourcecollectionhealthresponse.DescribeResourceCollectionHealthResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
