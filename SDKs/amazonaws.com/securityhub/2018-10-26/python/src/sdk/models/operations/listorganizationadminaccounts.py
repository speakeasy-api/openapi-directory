import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listorganizationadminaccountsresponse as shared_listorganizationadminaccountsresponse


@dataclasses.dataclass
class ListOrganizationAdminAccountsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOrganizationAdminAccountsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOrganizationAdminAccountsRequest:
    headers: ListOrganizationAdminAccountsHeaders = dataclasses.field()
    query_params: ListOrganizationAdminAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListOrganizationAdminAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_access_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_organization_admin_accounts_response: Optional[shared_listorganizationadminaccountsresponse.ListOrganizationAdminAccountsResponse] = dataclasses.field(default=None)
    
