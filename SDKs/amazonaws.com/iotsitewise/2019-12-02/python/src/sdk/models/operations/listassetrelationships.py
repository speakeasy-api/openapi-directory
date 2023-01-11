import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listassetrelationshipsresponse as shared_listassetrelationshipsresponse


@dataclasses.dataclass
class ListAssetRelationshipsPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    
class ListAssetRelationshipsTraversalTypeEnum(str, Enum):
    PATH_TO_ROOT = "PATH_TO_ROOT"


@dataclasses.dataclass
class ListAssetRelationshipsQueryParams:
    traversal_type: ListAssetRelationshipsTraversalTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'traversalType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAssetRelationshipsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssetRelationshipsRequest:
    headers: ListAssetRelationshipsHeaders = dataclasses.field()
    path_params: ListAssetRelationshipsPathParams = dataclasses.field()
    query_params: ListAssetRelationshipsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAssetRelationshipsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_asset_relationships_response: Optional[shared_listassetrelationshipsresponse.ListAssetRelationshipsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
