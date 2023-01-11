import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listaccountsforprovisionedpermissionsetrequest as shared_listaccountsforprovisionedpermissionsetrequest
from ..shared import listaccountsforprovisionedpermissionsetresponse as shared_listaccountsforprovisionedpermissionsetresponse


@dataclasses.dataclass
class ListAccountsForProvisionedPermissionSetQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListAccountsForProvisionedPermissionSetXAmzTargetEnum(str, Enum):
    SWB_EXTERNAL_SERVICE_LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET = "SWBExternalService.ListAccountsForProvisionedPermissionSet"


@dataclasses.dataclass
class ListAccountsForProvisionedPermissionSetHeaders:
    x_amz_target: ListAccountsForProvisionedPermissionSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAccountsForProvisionedPermissionSetRequest:
    headers: ListAccountsForProvisionedPermissionSetHeaders = dataclasses.field()
    query_params: ListAccountsForProvisionedPermissionSetQueryParams = dataclasses.field()
    request: shared_listaccountsforprovisionedpermissionsetrequest.ListAccountsForProvisionedPermissionSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAccountsForProvisionedPermissionSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_accounts_for_provisioned_permission_set_response: Optional[shared_listaccountsforprovisionedpermissionsetresponse.ListAccountsForProvisionedPermissionSetResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
