import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describerulespackagesrequest as shared_describerulespackagesrequest
from ..shared import describerulespackagesresponse as shared_describerulespackagesresponse

class DescribeRulesPackagesXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_RULES_PACKAGES = "InspectorService.DescribeRulesPackages"


@dataclasses.dataclass
class DescribeRulesPackagesHeaders:
    x_amz_target: DescribeRulesPackagesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRulesPackagesRequest:
    headers: DescribeRulesPackagesHeaders = dataclasses.field()
    request: shared_describerulespackagesrequest.DescribeRulesPackagesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeRulesPackagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_rules_packages_response: Optional[shared_describerulespackagesresponse.DescribeRulesPackagesResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
