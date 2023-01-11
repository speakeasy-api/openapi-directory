import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listrecordhistoryinput as shared_listrecordhistoryinput
from ..shared import listrecordhistoryoutput as shared_listrecordhistoryoutput

class ListRecordHistoryXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_RECORD_HISTORY = "AWS242ServiceCatalogService.ListRecordHistory"


@dataclasses.dataclass
class ListRecordHistoryHeaders:
    x_amz_target: ListRecordHistoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRecordHistoryRequest:
    headers: ListRecordHistoryHeaders = dataclasses.field()
    request: shared_listrecordhistoryinput.ListRecordHistoryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRecordHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    list_record_history_output: Optional[shared_listrecordhistoryoutput.ListRecordHistoryOutput] = dataclasses.field(default=None)
    
