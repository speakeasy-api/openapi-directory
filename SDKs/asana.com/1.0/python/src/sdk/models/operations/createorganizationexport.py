import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationexportrequest as shared_organizationexportrequest
from ..shared import organizationexportresponse as shared_organizationexportresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateOrganizationExportQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationExportRequestBody:
    data: Optional[shared_organizationexportrequest.OrganizationExportRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationExport201ApplicationJSON:
    data: Optional[shared_organizationexportresponse.OrganizationExportResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateOrganizationExportRequest:
    query_params: CreateOrganizationExportQueryParams = dataclasses.field()
    request: CreateOrganizationExportRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_organization_export_201_application_json_object: Optional[CreateOrganizationExport201ApplicationJSON] = dataclasses.field(default=None)
    
