import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listlicensemanagerreportgeneratorsrequest as shared_listlicensemanagerreportgeneratorsrequest
from ..shared import listlicensemanagerreportgeneratorsresponse as shared_listlicensemanagerreportgeneratorsresponse

class ListLicenseManagerReportGeneratorsXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_LIST_LICENSE_MANAGER_REPORT_GENERATORS = "AWSLicenseManager.ListLicenseManagerReportGenerators"


@dataclasses.dataclass
class ListLicenseManagerReportGeneratorsHeaders:
    x_amz_target: ListLicenseManagerReportGeneratorsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLicenseManagerReportGeneratorsRequest:
    headers: ListLicenseManagerReportGeneratorsHeaders = dataclasses.field()
    request: shared_listlicensemanagerreportgeneratorsrequest.ListLicenseManagerReportGeneratorsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListLicenseManagerReportGeneratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    authorization_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_license_manager_report_generators_response: Optional[shared_listlicensemanagerreportgeneratorsresponse.ListLicenseManagerReportGeneratorsResponse] = dataclasses.field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
