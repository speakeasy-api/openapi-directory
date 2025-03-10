"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import batchpermissionsrequestentry as shared_batchpermissionsrequestentry
from ..shared import batchrevokepermissionsresponse as shared_batchrevokepermissionsresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BatchRevokePermissionsRequestBody:
    
    entries: list[shared_batchpermissionsrequestentry.BatchPermissionsRequestEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Entries') }})
    r"""A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal."""  
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CatalogId'), 'exclude': lambda f: f is None }})
    r"""The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment."""  
    

@dataclasses.dataclass
class BatchRevokePermissionsRequest:
    
    request_body: BatchRevokePermissionsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class BatchRevokePermissionsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    batch_revoke_permissions_response: Optional[shared_batchrevokepermissionsresponse.BatchRevokePermissionsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    r"""OperationTimeoutException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    