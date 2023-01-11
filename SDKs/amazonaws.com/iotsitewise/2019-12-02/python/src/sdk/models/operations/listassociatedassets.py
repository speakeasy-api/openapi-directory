import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listassociatedassetsresponse as shared_listassociatedassetsresponse


@dataclasses.dataclass
class ListAssociatedAssetsPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    
class ListAssociatedAssetsTraversalDirectionEnum(str, Enum):
    PARENT = "PARENT"
    CHILD = "CHILD"


@dataclasses.dataclass
class ListAssociatedAssetsQueryParams:
    hierarchy_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hierarchyId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    traversal_direction: Optional[ListAssociatedAssetsTraversalDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'traversalDirection', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAssociatedAssetsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssociatedAssetsRequest:
    headers: ListAssociatedAssetsHeaders = dataclasses.field()
    path_params: ListAssociatedAssetsPathParams = dataclasses.field()
    query_params: ListAssociatedAssetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAssociatedAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_associated_assets_response: Optional[shared_listassociatedassetsresponse.ListAssociatedAssetsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
