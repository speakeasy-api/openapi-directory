import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeexportconfigurationsrequest as shared_describeexportconfigurationsrequest
from ..shared import describeexportconfigurationsresponse as shared_describeexportconfigurationsresponse

class DescribeExportConfigurationsXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_DESCRIBE_EXPORT_CONFIGURATIONS = "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"


@dataclasses.dataclass
class DescribeExportConfigurationsHeaders:
    x_amz_target: DescribeExportConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeExportConfigurationsRequest:
    headers: DescribeExportConfigurationsHeaders = dataclasses.field()
    request: shared_describeexportconfigurationsrequest.DescribeExportConfigurationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeExportConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization_error_exception: Optional[Any] = dataclasses.field(default=None)
    describe_export_configurations_response: Optional[shared_describeexportconfigurationsresponse.DescribeExportConfigurationsResponse] = dataclasses.field(default=None)
    home_region_not_set_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
