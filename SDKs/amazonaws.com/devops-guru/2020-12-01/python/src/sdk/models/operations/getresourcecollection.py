import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getresourcecollectionresponse as shared_getresourcecollectionresponse

class GetResourceCollectionResourceCollectionTypeEnum(str, Enum):
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"


@dataclasses.dataclass
class GetResourceCollectionPathParams:
    resource_collection_type: GetResourceCollectionResourceCollectionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceCollectionType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceCollectionQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResourceCollectionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceCollectionRequest:
    headers: GetResourceCollectionHeaders = dataclasses.field()
    path_params: GetResourceCollectionPathParams = dataclasses.field()
    query_params: GetResourceCollectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourceCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_resource_collection_response: Optional[shared_getresourcecollectionresponse.GetResourceCollectionResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
