import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listassociationsforlicenseconfigurationrequest as shared_listassociationsforlicenseconfigurationrequest
from ..shared import listassociationsforlicenseconfigurationresponse as shared_listassociationsforlicenseconfigurationresponse

class ListAssociationsForLicenseConfigurationXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"


@dataclasses.dataclass
class ListAssociationsForLicenseConfigurationHeaders:
    x_amz_target: ListAssociationsForLicenseConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssociationsForLicenseConfigurationRequest:
    headers: ListAssociationsForLicenseConfigurationHeaders = dataclasses.field()
    request: shared_listassociationsforlicenseconfigurationrequest.ListAssociationsForLicenseConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAssociationsForLicenseConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    authorization_exception: Optional[Any] = dataclasses.field(default=None)
    filter_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_associations_for_license_configuration_response: Optional[shared_listassociationsforlicenseconfigurationresponse.ListAssociationsForLicenseConfigurationResponse] = dataclasses.field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
