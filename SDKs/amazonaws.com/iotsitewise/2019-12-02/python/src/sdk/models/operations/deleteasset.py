import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import deleteassetresponse as shared_deleteassetresponse


@dataclasses.dataclass
class DeleteAssetPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssetQueryParams:
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAssetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssetRequest:
    headers: DeleteAssetHeaders = dataclasses.field()
    path_params: DeleteAssetPathParams = dataclasses.field()
    query_params: DeleteAssetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_operation_exception: Optional[Any] = dataclasses.field(default=None)
    delete_asset_response: Optional[shared_deleteassetresponse.DeleteAssetResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
