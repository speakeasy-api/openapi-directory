import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startsupportdataexportrequest as shared_startsupportdataexportrequest
from ..shared import startsupportdataexportresult as shared_startsupportdataexportresult

class StartSupportDataExportXAmzTargetEnum(str, Enum):
    MARKETPLACE_COMMERCE_ANALYTICS20150701_START_SUPPORT_DATA_EXPORT = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"


@dataclasses.dataclass
class StartSupportDataExportHeaders:
    x_amz_target: StartSupportDataExportXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartSupportDataExportRequest:
    headers: StartSupportDataExportHeaders = dataclasses.field()
    request: shared_startsupportdataexportrequest.StartSupportDataExportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartSupportDataExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marketplace_commerce_analytics_exception: Optional[Any] = dataclasses.field(default=None)
    start_support_data_export_result: Optional[shared_startsupportdataexportresult.StartSupportDataExportResult] = dataclasses.field(default=None)
    
