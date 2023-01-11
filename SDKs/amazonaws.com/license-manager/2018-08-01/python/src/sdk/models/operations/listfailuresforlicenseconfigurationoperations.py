import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listfailuresforlicenseconfigurationoperationsrequest as shared_listfailuresforlicenseconfigurationoperationsrequest
from ..shared import listfailuresforlicenseconfigurationoperationsresponse as shared_listfailuresforlicenseconfigurationoperationsresponse
from ..operations import listfailuresforlicenseconfigurationoperationsrequest as operations_listfailuresforlicenseconfigurationoperationsrequest
from ..operations import listfailuresforlicenseconfigurationoperationsresponse as operations_listfailuresforlicenseconfigurationoperationsresponse

class ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"


@dataclasses.dataclass
class ListFailuresForLicenseConfigurationOperationsHeaders:
    x_amz_target: ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFailuresForLicenseConfigurationOperationsRequest:
    headers: ListFailuresForLicenseConfigurationOperationsHeaders = dataclasses.field()
    request: shared_listfailuresforlicenseconfigurationoperationsrequest.ListFailuresForLicenseConfigurationOperationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListFailuresForLicenseConfigurationOperationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    authorization_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_failures_for_license_configuration_operations_response: Optional[shared_listfailuresforlicenseconfigurationoperationsresponse.ListFailuresForLicenseConfigurationOperationsResponse] = dataclasses.field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
