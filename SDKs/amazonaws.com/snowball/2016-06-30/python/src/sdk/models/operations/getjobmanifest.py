import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getjobmanifestrequest as shared_getjobmanifestrequest
from ..shared import getjobmanifestresult as shared_getjobmanifestresult

class GetJobManifestXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_MANIFEST = "AWSIESnowballJobManagementService.GetJobManifest"


@dataclasses.dataclass
class GetJobManifestHeaders:
    x_amz_target: GetJobManifestXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJobManifestRequest:
    headers: GetJobManifestHeaders = dataclasses.field()
    request: shared_getjobmanifestrequest.GetJobManifestRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetJobManifestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_job_manifest_result: Optional[shared_getjobmanifestresult.GetJobManifestResult] = dataclasses.field(default=None)
    invalid_job_state_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
