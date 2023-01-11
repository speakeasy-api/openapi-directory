import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletesizeconstraintsetrequest as shared_deletesizeconstraintsetrequest
from ..shared import deletesizeconstraintsetresponse as shared_deletesizeconstraintsetresponse

class DeleteSizeConstraintSetXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_DELETE_SIZE_CONSTRAINT_SET = "AWSWAF_20150824.DeleteSizeConstraintSet"


@dataclasses.dataclass
class DeleteSizeConstraintSetHeaders:
    x_amz_target: DeleteSizeConstraintSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSizeConstraintSetRequest:
    headers: DeleteSizeConstraintSetHeaders = dataclasses.field()
    request: shared_deletesizeconstraintsetrequest.DeleteSizeConstraintSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteSizeConstraintSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_size_constraint_set_response: Optional[shared_deletesizeconstraintsetresponse.DeleteSizeConstraintSetResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_non_empty_entity_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_referenced_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    
