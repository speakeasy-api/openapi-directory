import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putactionrevisioninput as shared_putactionrevisioninput
from ..shared import putactionrevisionoutput as shared_putactionrevisionoutput

class PutActionRevisionXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_ACTION_REVISION = "CodePipeline_20150709.PutActionRevision"


@dataclasses.dataclass
class PutActionRevisionHeaders:
    x_amz_target: PutActionRevisionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutActionRevisionRequest:
    headers: PutActionRevisionHeaders = dataclasses.field()
    request: shared_putactionrevisioninput.PutActionRevisionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutActionRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_action_revision_output: Optional[shared_putactionrevisionoutput.PutActionRevisionOutput] = dataclasses.field(default=None)
    stage_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
