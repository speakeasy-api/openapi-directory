import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getsoftwareupdatesrequest as shared_getsoftwareupdatesrequest
from ..shared import getsoftwareupdatesresult as shared_getsoftwareupdatesresult

class GetSoftwareUpdatesXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_SOFTWARE_UPDATES = "AWSIESnowballJobManagementService.GetSoftwareUpdates"


@dataclasses.dataclass
class GetSoftwareUpdatesHeaders:
    x_amz_target: GetSoftwareUpdatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSoftwareUpdatesRequest:
    headers: GetSoftwareUpdatesHeaders = dataclasses.field()
    request: shared_getsoftwareupdatesrequest.GetSoftwareUpdatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSoftwareUpdatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_software_updates_result: Optional[shared_getsoftwareupdatesresult.GetSoftwareUpdatesResult] = dataclasses.field(default=None)
    invalid_job_state_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
