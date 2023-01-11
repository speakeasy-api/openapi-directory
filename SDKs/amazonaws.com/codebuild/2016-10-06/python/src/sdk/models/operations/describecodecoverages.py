import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecodecoveragesinput as shared_describecodecoveragesinput
from ..shared import describecodecoveragesoutput as shared_describecodecoveragesoutput


@dataclasses.dataclass
class DescribeCodeCoveragesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeCodeCoveragesXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES = "CodeBuild_20161006.DescribeCodeCoverages"


@dataclasses.dataclass
class DescribeCodeCoveragesHeaders:
    x_amz_target: DescribeCodeCoveragesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeCodeCoveragesRequest:
    headers: DescribeCodeCoveragesHeaders = dataclasses.field()
    query_params: DescribeCodeCoveragesQueryParams = dataclasses.field()
    request: shared_describecodecoveragesinput.DescribeCodeCoveragesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeCodeCoveragesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_code_coverages_output: Optional[shared_describecodecoveragesoutput.DescribeCodeCoveragesOutput] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
