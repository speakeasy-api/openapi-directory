import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeproblemobservationsrequest as shared_describeproblemobservationsrequest
from ..shared import describeproblemobservationsresponse as shared_describeproblemobservationsresponse

class DescribeProblemObservationsXAmzTargetEnum(str, Enum):
    EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_PROBLEM_OBSERVATIONS = "EC2WindowsBarleyService.DescribeProblemObservations"


@dataclasses.dataclass
class DescribeProblemObservationsHeaders:
    x_amz_target: DescribeProblemObservationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeProblemObservationsRequest:
    headers: DescribeProblemObservationsHeaders = dataclasses.field()
    request: shared_describeproblemobservationsrequest.DescribeProblemObservationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeProblemObservationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_problem_observations_response: Optional[shared_describeproblemobservationsresponse.DescribeProblemObservationsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
