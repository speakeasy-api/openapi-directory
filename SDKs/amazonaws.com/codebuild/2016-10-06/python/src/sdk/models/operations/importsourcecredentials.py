import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import importsourcecredentialsinput as shared_importsourcecredentialsinput
from ..shared import importsourcecredentialsoutput as shared_importsourcecredentialsoutput

class ImportSourceCredentialsXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS = "CodeBuild_20161006.ImportSourceCredentials"


@dataclasses.dataclass
class ImportSourceCredentialsHeaders:
    x_amz_target: ImportSourceCredentialsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportSourceCredentialsRequest:
    headers: ImportSourceCredentialsHeaders = dataclasses.field()
    request: shared_importsourcecredentialsinput.ImportSourceCredentialsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportSourceCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    import_source_credentials_output: Optional[shared_importsourcecredentialsoutput.ImportSourceCredentialsOutput] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    
