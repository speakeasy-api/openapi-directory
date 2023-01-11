import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationexportresponse as shared_organizationexportresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetOrganizationExportPathParams:
    organization_export_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization_export_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationExportQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrganizationExport200ApplicationJSON:
    data: Optional[shared_organizationexportresponse.OrganizationExportResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetOrganizationExportRequest:
    path_params: GetOrganizationExportPathParams = dataclasses.field()
    query_params: GetOrganizationExportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_organization_export_200_application_json_object: Optional[GetOrganizationExport200ApplicationJSON] = dataclasses.field(default=None)
    
