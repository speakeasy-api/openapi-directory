import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describereportdefinitionsrequest as shared_describereportdefinitionsrequest
from ..shared import describereportdefinitionsresponse as shared_describereportdefinitionsresponse


@dataclasses.dataclass
class DescribeReportDefinitionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeReportDefinitionsXAmzTargetEnum(str, Enum):
    AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DESCRIBE_REPORT_DEFINITIONS = "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"


@dataclasses.dataclass
class DescribeReportDefinitionsHeaders:
    x_amz_target: DescribeReportDefinitionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeReportDefinitionsRequest:
    headers: DescribeReportDefinitionsHeaders = dataclasses.field()
    query_params: DescribeReportDefinitionsQueryParams = dataclasses.field()
    request: shared_describereportdefinitionsrequest.DescribeReportDefinitionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeReportDefinitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_report_definitions_response: Optional[shared_describereportdefinitionsresponse.DescribeReportDefinitionsResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
