import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listpermissionsetprovisioningstatusrequest as shared_listpermissionsetprovisioningstatusrequest
from ..shared import listpermissionsetprovisioningstatusresponse as shared_listpermissionsetprovisioningstatusresponse


@dataclasses.dataclass
class ListPermissionSetProvisioningStatusQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListPermissionSetProvisioningStatusXAmzTargetEnum(str, Enum):
    SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SET_PROVISIONING_STATUS = "SWBExternalService.ListPermissionSetProvisioningStatus"


@dataclasses.dataclass
class ListPermissionSetProvisioningStatusHeaders:
    x_amz_target: ListPermissionSetProvisioningStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPermissionSetProvisioningStatusRequest:
    headers: ListPermissionSetProvisioningStatusHeaders = dataclasses.field()
    query_params: ListPermissionSetProvisioningStatusQueryParams = dataclasses.field()
    request: shared_listpermissionsetprovisioningstatusrequest.ListPermissionSetProvisioningStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListPermissionSetProvisioningStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_permission_set_provisioning_status_response: Optional[shared_listpermissionsetprovisioningstatusresponse.ListPermissionSetProvisioningStatusResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
