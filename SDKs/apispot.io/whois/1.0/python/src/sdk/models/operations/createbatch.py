import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateBatchRequestBodyOperationEnum(str, Enum):
    WHOIS = "whois"
    CHECK = "check"

class CreateBatchRequestBodyOptionsFormatEnum(str, Enum):
    RAW = "raw"
    FORMATTED = "formatted"
    JSON = "json"


@dataclass_json
@dataclasses.dataclass
class CreateBatchRequestBodyOptions:
    format: Optional[CreateBatchRequestBodyOptionsFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchRequestBody:
    domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    operation: CreateBatchRequestBodyOperationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    options: Optional[CreateBatchRequestBodyOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

@dataclasses.dataclass
class CreateBatchRequest:
    request: CreateBatchRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch: Optional[Any] = dataclasses.field(default=None)
    
