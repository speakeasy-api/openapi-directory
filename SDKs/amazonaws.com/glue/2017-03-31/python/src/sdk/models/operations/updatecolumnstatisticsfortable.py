import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatecolumnstatisticsfortablerequest as shared_updatecolumnstatisticsfortablerequest
from ..shared import updatecolumnstatisticsfortableresponse as shared_updatecolumnstatisticsfortableresponse

class UpdateColumnStatisticsForTableXAmzTargetEnum(str, Enum):
    AWS_GLUE_UPDATE_COLUMN_STATISTICS_FOR_TABLE = "AWSGlue.UpdateColumnStatisticsForTable"


@dataclasses.dataclass
class UpdateColumnStatisticsForTableHeaders:
    x_amz_target: UpdateColumnStatisticsForTableXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateColumnStatisticsForTableRequest:
    headers: UpdateColumnStatisticsForTableHeaders = dataclasses.field()
    request: shared_updatecolumnstatisticsfortablerequest.UpdateColumnStatisticsForTableRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateColumnStatisticsForTableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    glue_encryption_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    update_column_statistics_for_table_response: Optional[shared_updatecolumnstatisticsfortableresponse.UpdateColumnStatisticsForTableResponse] = dataclasses.field(default=None)
    
