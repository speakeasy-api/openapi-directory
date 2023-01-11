import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import describeeventcategoriesmessage as shared_describeeventcategoriesmessage
from ..shared import describeeventcategoriesresponse as shared_describeeventcategoriesresponse

class DescribeEventCategoriesXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_EVENT_CATEGORIES = "AmazonDMSv20160101.DescribeEventCategories"


@dataclasses.dataclass
class DescribeEventCategoriesHeaders:
    x_amz_target: DescribeEventCategoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeEventCategoriesRequest:
    headers: DescribeEventCategoriesHeaders = dataclasses.field()
    request: shared_describeeventcategoriesmessage.DescribeEventCategoriesMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeEventCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_event_categories_response: Optional[shared_describeeventcategoriesresponse.DescribeEventCategoriesResponse] = dataclasses.field(default=None)
    
