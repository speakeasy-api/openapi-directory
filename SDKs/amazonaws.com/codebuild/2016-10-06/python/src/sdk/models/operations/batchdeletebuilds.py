import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchdeletebuildsinput as shared_batchdeletebuildsinput
from ..shared import batchdeletebuildsoutput as shared_batchdeletebuildsoutput

class BatchDeleteBuildsXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_BATCH_DELETE_BUILDS = "CodeBuild_20161006.BatchDeleteBuilds"


@dataclasses.dataclass
class BatchDeleteBuildsHeaders:
    x_amz_target: BatchDeleteBuildsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchDeleteBuildsRequest:
    headers: BatchDeleteBuildsHeaders = dataclasses.field()
    request: shared_batchdeletebuildsinput.BatchDeleteBuildsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchDeleteBuildsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_delete_builds_output: Optional[shared_batchdeletebuildsoutput.BatchDeleteBuildsOutput] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
