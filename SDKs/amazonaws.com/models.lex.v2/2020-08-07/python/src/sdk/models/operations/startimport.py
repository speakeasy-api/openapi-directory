import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botimportspecification as shared_botimportspecification
from ..shared import botlocaleimportspecification as shared_botlocaleimportspecification
from ..shared import startimportresponse as shared_startimportresponse


@dataclasses.dataclass
class StartImportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartImportRequestBodyMergeStrategyEnum(str, Enum):
    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"


@dataclass_json
@dataclasses.dataclass
class StartImportRequestBodyResourceSpecification:
    r"""StartImportRequestBodyResourceSpecification
    Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
    """
    
    bot_import_specification: Optional[shared_botimportspecification.BotImportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botImportSpecification') }})
    bot_locale_import_specification: Optional[shared_botlocaleimportspecification.BotLocaleImportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleImportSpecification') }})
    

@dataclass_json
@dataclasses.dataclass
class StartImportRequestBody:
    import_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importId') }})
    merge_strategy: StartImportRequestBodyMergeStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeStrategy') }})
    resource_specification: StartImportRequestBodyResourceSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    file_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePassword') }})
    

@dataclasses.dataclass
class StartImportRequest:
    headers: StartImportHeaders = dataclasses.field()
    request: StartImportRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_import_response: Optional[shared_startimportresponse.StartImportResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
